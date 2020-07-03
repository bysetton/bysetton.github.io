import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { Company } from 'src/app/interfaces/company.interface';

@Component({
  selector: 'line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent {

  @Input() config: Company;
  @Input() searchValue: string;

  @Output() tagClicked = new EventEmitter<string>();
  @Output() itemSelected = new EventEmitter<Company>();

  constructor() { }

  hashtagClicked(tag: string): void {
    this.tagClicked.emit(tag);
  }

  onCardClick(company: Company): void {
    this.itemSelected.emit(company);
  }
}
