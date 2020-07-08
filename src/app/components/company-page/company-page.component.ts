import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { CompaniesService } from '../../services/companies/companies.service'
import { Company, Tag } from '../../interfaces/company.interface'
import { SearchService } from 'src/app/services/search/search.service';


@Component({
  selector: 'company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  company: Company;
  showSearch: boolean;

  private companies: Company[];
  private companyParam: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companiesService: CompaniesService,
    private searchService: SearchService, ) { }

  ngOnInit(): void {
    this.searchService.isNotHomePage();
    this.companiesService.companies.subscribe((companies: Company[]) => {
      this.companies = companies;
      this.getParam();
    });
  }

  hashtagClicked(tag: Tag): void {
    this.searchService.addTag(tag);
  }

  onBackClicked(): void {
    this.router.navigateByUrl('/');
  }

  private buildCompany(): void {
    this.company = this.companies.find((company) => {
      return company.name == this.companyParam;
    }) as Company;
  }

  private getParam(): void {
    this.route.params.subscribe(params => {
      this.companyParam = params['company'];
      console.log(this.companyParam);
      this.buildCompany();
    });
  }
}
