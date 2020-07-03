import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { LineItemComponent } from './line-item.component';

@NgModule({
  declarations: [LineItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [LineItemComponent],
})
export class LineItemModule { }
