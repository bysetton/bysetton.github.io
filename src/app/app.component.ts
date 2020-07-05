import { Component, OnInit } from '@angular/core';
import { CompaniesService } from './services/companies/companies.service';
import { Company } from './interfaces/company.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  searchFocus: boolean;
  loadRouter: boolean;
  companies: Company[] = [];
  title = 'angular-material-app';

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.companiesService.companies.subscribe((companies) => {
      if (companies.length) {
        this.companies = companies;
        this.loadRouter = true;
      }
    });
  }

  onSearchFocus(state: boolean): void {
    setTimeout(() => this.searchFocus = state, 100);
  }
}
