import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { BackButtonModule } from '../common/back-button/back-button.module';

import { SearchComponent } from './search.component';
import { LineItemModule } from './presentationals/line-item/line-item.module';
import { MobileSearchModule } from './presentationals/mobile-search/mobile-search.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    BackButtonModule,
    CommonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MobileSearchModule,
    ReactiveFormsModule,
    LineItemModule,
  ],
  exports: [SearchComponent],
})
export class SearchModule { }
