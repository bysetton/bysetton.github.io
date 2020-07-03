import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { CompanyPageComponent } from './company-page.component';
import { BackButtonModule } from '../common/back-button/back-button.module';

@NgModule({
  declarations: [CompanyPageComponent],
  imports: [
    CommonModule,
    BackButtonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
  ],
  exports: [CompanyPageComponent],
})
export class CompanyPageModule { }
