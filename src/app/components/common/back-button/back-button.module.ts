import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { BackButtonComponent } from './back-button.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BackButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [BackButtonComponent],
})
export class BackButtonModule { }
