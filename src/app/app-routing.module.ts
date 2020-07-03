import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'brand/:company', component: CompanyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
