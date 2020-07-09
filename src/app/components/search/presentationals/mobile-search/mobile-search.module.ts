import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileSearchComponent } from './mobile-search.component';

@NgModule({
  declarations: [MobileSearchComponent],
  imports: [
    CommonModule
  ],
  exports: [MobileSearchComponent],
})
export class MobileSearchModule { }
