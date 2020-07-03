import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SearchModule } from '../search/search.module';
import { LineItemModule } from '../search/presentationals/line-item/line-item.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
  ],
})
export class HomeModule { }
