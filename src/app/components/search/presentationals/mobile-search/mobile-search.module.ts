import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MobileSearchComponent } from './mobile-search.component';

@NgModule({
  declarations: [MobileSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [MobileSearchComponent],
})
export class MobileSearchModule { }
