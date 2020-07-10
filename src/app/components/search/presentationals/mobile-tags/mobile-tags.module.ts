import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { MobileTagsComponent } from './mobile-tags.component';

@NgModule({
  declarations: [MobileTagsComponent],
  imports: [
    CommonModule,
    MatChipsModule,
  ],
  exports: [MobileTagsComponent],
})
export class MobileTagsModule { }
