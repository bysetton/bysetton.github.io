import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  @Input() show: boolean;

  @Output() clicked = new EventEmitter();

  isTrue: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
