import { Component, Input, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';

import { Tag } from 'src/app/interfaces/company.interface';

@Component({
  selector: 'mobile-tags',
  templateUrl: './mobile-tags.component.html',
  styleUrls: ['./mobile-tags.component.scss'],
})
export class MobileTagsComponent {

  @Input() tags: Tag[];

  @Output() deleteTag = new EventEmitter<Tag>();

  private sideBarExpanded: boolean;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    console.log('click');
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.sideBarExpanded = false;
    } else {
      console.log(event.target);
    }
  }

  constructor(private eRef: ElementRef) { }

  onTagclick(tag: Tag): void {
    if (!this.sideBarExpanded) {
      this.sideBarExpanded = true;
      return;
    }

    this.deleteTag.emit(tag);
  }

  ontagSideBarClicked(): void {
    console.log('side bar clicked');
  }

  onClick(): void {
    console.log('clicked ');
  }

}
