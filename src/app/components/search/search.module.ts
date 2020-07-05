import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { SearchComponent } from './search.component';
import { LineItemModule } from './presentationals/line-item/line-item.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    ReactiveFormsModule,
    LineItemModule,
  ],
  exports: [SearchComponent],
})
export class SearchModule { }
