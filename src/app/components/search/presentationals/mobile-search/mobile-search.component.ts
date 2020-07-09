import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.scss']
})
export class MobileSearchComponent implements OnInit {

  @Input() control: FormControl;
  @Input() placeHolder: string = '';

  constructor() { }

  ngOnInit() {
  }

}
