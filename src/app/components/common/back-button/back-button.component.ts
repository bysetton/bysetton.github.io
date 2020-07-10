import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  @Output() clicked = new EventEmitter();

  isTrue: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isTrue = true;
    }, 500);
  }

}
