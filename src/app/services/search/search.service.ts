import { Injectable, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { Tag } from '../../interfaces/company.interface'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _isHomePage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private activeTags: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>([]);
  private _activeTags: Tag[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects == '/') {
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
}

enum Page {
  HOME,
  OTHER,
}
