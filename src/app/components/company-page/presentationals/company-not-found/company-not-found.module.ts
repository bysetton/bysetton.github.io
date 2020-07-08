import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CompanyNotFoundComponent } from './company-not-found.component';

@NgModule({
  declarations: [CompanyNotFoundComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [CompanyNotFoundComponent],
})
export class CompanyNotFoundModule { }
