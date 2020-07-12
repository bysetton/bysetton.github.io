import {
  Component,
  OnInit,
  HostListener,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, NavigationEnd, } from '@angular/router';
import { Location } from '@angular/common'

import { Company, Tag } from 'src/app/interfaces/company.interface';
import { SearchService } from 'src/app/services/search/search.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  @Input() companies: Company[] = [];

  @Output() blur = new EventEmitter<boolean>();

  searchControl = new FormControl('');
  placeHolder = 'Eg. Craft beer';

  activeTags: Tag[] = [];
  searchValue: string;

  stickMenu: string = 'unstick-menu';
  focus: string = 'search-close';

  tagSearchResult: Company[] = [];
  searchResult: Company[] = [];
  companyNameSearchResult: Company[] = [];
  aboutSearchResult: Company[] = [];
  suggestionResult: Company[] = [];

  isHomePage: boolean;
  showSearchResult: boolean;
  showBackButton: boolean = true;

  private requiredScrollPos: number = 50;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.searchResult = this.companies;
    this.maybeShowBackButton();
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
      this.router.navigateByUrl('/');
    }

    this.searchValue = value;
    this.refreshSearchResults();
  }

  addTag(tag: Tag): void {
    if (this.activeTags.find((t) => t.name === tag.name)) {
      return;
    }
    this.refreshSearchResults();
    this.searchService.addTag(tag);
  }

  removeTag(tag: Tag): void {
    this.searchService.removeTag(tag);
    this.refreshSearchResults();
  }

  onItemSelected(company: Company): void {
    this.router.navigateByUrl('/' + company.name);
  }

  onBackClicked(): void {
    this.router.navigateByUrl('/');
  }

  onDeleteTag(tag: Tag): void {
    this.removeTag(tag);
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
    if (!this.searchValue && this.activeTags.length == 0) {
      this.searchResult = this.companies;
      return;
    }
    this.searchCompanyName();
    this.searchAbout();
    this.searchTags();
    this.combineSearchResults();
    this.filterActiveTags();
    this.buildSuggestions();
  }

  private buildSuggestions() {
    this.suggestionResult = [];
    this.companyNameSearchResult.forEach((company) => {
      if (this.suggestionResult.indexOf(company) == -1 && this.searchResult.indexOf(company) == -1) {
        this.suggestionResult.push(company);
      }
    });
    this.aboutSearchResult.forEach((company) => {
      if (this.suggestionResult.indexOf(company) == -1 && this.searchResult.indexOf(company) == -1) {
        this.suggestionResult.push(company);
      }
    });
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
    if (this.searchResult.length == 0) {
      this.searchResult = this.companies;
    }
    this.searchResult = this.searchResult.filter((company) => {
      let containsAllTag: boolean = true;
      this.activeTags.forEach((tag) => {
        let tagExists = false;
        company.tags.forEach((companyTag) => {
          if (companyTag.name == tag.name) {
            tagExists = true;
          }
        });
        containsAllTag = containsAllTag && tagExists;
        if (!tagExists) {
          this.suggestionResult.push(company);
        }
      });
      return containsAllTag;
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

  private maybeShowBackButton(): void {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((event: any) => {
      if (event.url == '/' || event.url.startsWith('/?')) {
        this.showBackButton = false;
        this.isHomePage = true;
        return;
      }
      this.showBackButton = true;
    });
  }

}
