import {
  Component,
  OnInit,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
import { Location } from '@angular/common'

import { Company, Tag } from 'src/app/interfaces/company.interface';
import { SearchService } from 'src/app/services/search/search.service';
import { CompaniesService } from 'src/app/services/companies/companies.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  @Output() blur = new EventEmitter<boolean>();

  searchControl = new FormControl('');

  activeTags: Tag[] = [];
  searchValue: string;

  stickMenu: string = 'unstick-menu';
  focus: string = 'search-close';

  companies: Company[] = [];
  tagSearchResult: Company[] = [];
  searchResult: Company[] = [];
  companyNameSearchResult: Company[] = [];
  aboutSearchResult: Company[] = [];

  isHomePage: boolean;
  showSearchResult: boolean;

  private requiredScrollPos: number = 50;

  constructor(
    private companiesService: CompaniesService,
    private searchService: SearchService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.companiesService.companies.subscribe((companies) => {
      this.searchResult = this.companies = companies;
      this.maybeSetHomePage();
      this.buildSearchControl();
      this.setParamAndInit();
      this.searchService.activeTags$.subscribe((actionTags: Tag[]) => {
        this.activeTags = actionTags;
        this.refreshSearchResults();
        this.updateParamsToUrl();
      });
      this.router.events.subscribe((event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          this.updateParamsToUrl();
        }
      });
    });
  }

  onBlur() {
    this.focus = 'search-close';
    if (!this.isHomePage) {
      this.blur.emit(false);
    }
  }

  onFocus(): void {
    this.onValueChange(this.searchValue);
    this.focus = 'search-open';
  }

  onValueChange(value): void {
    if (!this.isHomePage && value) {
      this.blur.emit(true);
      this.showSearchResult = true;

    }
    this.searchValue = value;
    this.refreshSearchResults();
  }

  addTag(tag: Tag): void {
    if (this.activeTags.find((t) => t.name === tag.name)) {
      return;
    }
    this.searchService.addTag(tag);
  }

  removeTag(tag: Tag): void {
    this.searchService.removeTag(tag);
  }

  onItemSelected(company: Company): void {
    this.router.navigateByUrl('/brand/' + company.name);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > this.requiredScrollPos) {
      this.stickMenu = 'stick-menu';
    } else {
      this.stickMenu = 'unstick-menu';
    }
  }

  private maybeSetHomePage(): void {
    this.searchService.isHome$().subscribe((isHomePage: boolean) => {
      this.isHomePage = isHomePage;
      this.showSearchResult = false;
      if (isHomePage) {
        this.showSearchResult = true;
      }
    });
  }

  private buildSearchControl(): void {
    this.searchControl.valueChanges.subscribe((value) => {
      this.onValueChange(value);
      this.updateParamsToUrl();
    });
  }

  private setParamAndInit(): void {
    let tagResult: any;
    let searchResult: any;
    const params = location.search.substr(1).split("&");
    for (var index = 0; index < params.length; index++) {
      let paramKeyPair = params[index].split("=");
      if (paramKeyPair[0] === 'tags') {
        tagResult = decodeURIComponent(paramKeyPair[1]);
      }
      if (paramKeyPair[0] === 'search') {
        searchResult = decodeURIComponent(paramKeyPair[1]);
      }
    }

    const tags = tagResult ? tagResult.split(',') : [];

    if (tags) {
      tags.forEach((tag) => this.searchService.addTag({ name: tag } as Tag));
    }
    this.searchValue = searchResult || '';
    if (this.searchValue) {
      this.searchControl.setValue(this.searchValue);
    }
  }

  private refreshSearchResults() {
    if (this.searchValue) {
      this.searchCompanyName();
      this.searchAbout();
      this.searchTags();
      this.combineSearchResults();
    } else {
      this.searchResult = this.companies;
    }
    this.filterActiveTags();
  }

  private searchCompanyName(): void {
    if (!this.searchValue) {
      this.searchResult = this.companies;
      return;
    }
    this.companyNameSearchResult = this.companies.filter((company) => {
      return company.name && company.name.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  private searchAbout(): void {
    if (!this.searchValue) {
      this.searchResult = this.companies;
      return;
    }
    this.aboutSearchResult = this.companies.filter((company: Company) => {
      return company.about && company.about.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }

  private combineSearchResults(): void {
    const allResults = this.companyNameSearchResult.concat(this.aboutSearchResult, this.tagSearchResult);
    this.searchResult = allResults.filter((a, b) => allResults.indexOf(a) === b);
  }

  private searchTags(): void {
    this.tagSearchResult = this.companies.filter((company) => {
      return company.tags.some((tag) => {
        return tag.name.toLowerCase().includes(this.searchValue.toLowerCase());;
      });
    });
  }

  private filterActiveTags(): void {
    if (this.activeTags.length == 0) {
      return;
    }
    this.searchResult = this.searchResult.filter((company) => {
      return company.tags.some((tag) => {
        return this.activeTags.some((t) => t.name == tag.name);
      });
    });
  }

  private updateParamsToUrl(): void {
    let newUrl = window.location.pathname;
    if (this.activeTags.length != 0 || this.searchValue) {
      newUrl += '?';
    }
    this.location.replaceState(this.getNewUrl(newUrl));
  }

  private getNewUrl(newUrl: string): string {
    if (this.activeTags.length != 0) {
      const queryParams: string[] = this.activeTags.map((tag) => { return tag.name });
      newUrl += 'tags=' + queryParams.toString();
      if (this.searchValue) {
        newUrl += '&';
      }
    }
    return this.addValueParamToUrl(newUrl);
  }
  private addValueParamToUrl(url: string): string {
    if (this.searchValue) {
      url += 'search=' + this.searchValue;
    }
    return url
  }
}
