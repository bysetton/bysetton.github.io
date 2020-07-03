import { Injectable, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { Company } from '../../interfaces/company.interface'
import { Tag } from '../../interfaces/company.interface'
import { CompaniesService } from '../../services/companies/companies.service'
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _isHomePage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private activeTags: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>([]);
  private _activeTags: Tag[] = [];
  // private searchValue: string;
  // private _searchResults = new BehaviorSubject<Company[]>([]);
  // private companies = this.companiesService.companies;
  // private results: Company[];
  // private companyNameSearchResult: Company[];
  // private tagSearchResult: Company[];
  // private aboutSearchResult: Company[];
  // private currentPage: Page;

  constructor(private companiesService: CompaniesService, private router: Router) {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects == '/home') {
        this._isHomePage.next(true);
        return;
      }
    });
  }

  get activeTags$(): BehaviorSubject<Tag[]> {
    return this.activeTags;
  }

  isHome$(): BehaviorSubject<boolean> {
    return this._isHomePage;
  }

  isHomePage(): void {
    this._isHomePage.next(true);
  }

  isNotHomePage(): void {
    this._isHomePage.next(false);
  }

  addTag(tag: Tag): void {
    if (this._activeTags.find((t) => t.name === tag.name)) {
      return;
    }
    this._activeTags.push(tag);
    this.activeTags.next(this._activeTags);
  }

  removeTag(tag: Tag): void {
    this._activeTags = this._activeTags.filter((t) => {
      return t != tag;
    });
    this.activeTags.next(this._activeTags);
  }

  buildUrl(searchValue: string): void {

  }

  // get searchResults(): Observable<Company[]> {
  //   return this._searchResults.asObservable();
  // }

  // setSearchResults(results: Company[]): void {
  //   this.results = results;
  //   this._searchResults.next(this.results);
  // }


  // searchWithValue(value: string) {
  //   this.searchActiveTags();
  //   if (value) {
  //     this.searchValue = value;
  //     this.searchCompanyName(this.searchValue);
  //     this.searchAbout(this.searchValue);
  //   }
  //   this.combineSearchResults();
  //   this._searchResults.next(this.results);
  // }

  // private searchActiveTags(): void {
  //   if (this.ActiveTags.length == 0) {
  //     return;
  //   }
  //   this.tagSearchResult = this.results.filter((company) => {
  //     return company.tags.some((tag) => {
  //       return this.ActiveTags.some((t) => {
  //         return t.name == tag.name;
  //       });
  //     });
  //   });
  // }

  // private searchCompanyName(value: string): void {
  //   if (!value) {
  //     this.results = this.companies;
  //     return;
  //   }
  //   this.companyNameSearchResult = this.companies.filter((company) => {
  //     return company.name && company.name.toLowerCase().includes(value.toLowerCase());
  //   });
  // }

  // private searchAbout(value: string): void {
  //   if (!value) {
  //     this.results = this.companies;
  //     return;
  //   }
  //   this.companyNameSearchResult = this.companies.filter((company: Company) => {
  //     return company.about && company.about.toLowerCase().includes(value.toLowerCase());
  //   });
  // }

  // private updateSearchOnTags(tags: Tag[]): void {
  //   this.searchWithValue(this.searchValue);
  //   this._tags.next(tags);
  // }
}

enum Page {
  HOME,
  OTHER,
}
