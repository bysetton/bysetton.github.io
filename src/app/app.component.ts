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
  backgroundImageUrl: string;

  private backgroundImages = [
    'https://images.creativemarket.com/0.1.0/ps/3566952/910/607/m1/fpnw/wm0/prev-.jpg?1510556190&s=e0453f06a742b7bf026090fa70e83e97',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZJacPBk-03LqiNpmyXiF4j1pboNG4RppyKw&usqp=CAU',
    'https://thumbs.dreamstime.com/b/black-white-colorful-memphis-abstract-geometric-shapes-seamless-pattern-vector-background-92889814.jpg',
    'https://ourtime.org.uk/wp-content/uploads/2018/08/pattern-5.png',
    'https://www.miltonandking.com/eu/wp-content/uploads/sites/3/2019/12/Wallpaper-Geaorgia-McMillian-DibbaDots-1.jpg',
    'https://previews.123rf.com/images/mikabesfamilnaya/mikabesfamilnaya1711/mikabesfamilnaya171100540/90617319-background-hand-drawn-lines-hair-texture-monochrome-wave-pattern-doodle-for-design-line-art-illustra.jpg',
  ];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.backgroundImageUrl = this.backgroundImages[Math.floor(Math.random() * this.backgroundImages.length)];
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
