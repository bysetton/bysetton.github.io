import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Company } from '../../interfaces/company.interface'
import { SpreadSheetService } from '../spread-sheet/spread-sheet.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private _companies = [];

  private _companies_old = [
    {
      img: '/assets/imgs/tapi-tapi-profile.jpeg',
      name: 'Tapi Tapi',
      about: 'Tapi Tapi is an educational initiative that is focused on sharing food and food culture from the African continent, with other Africans and our visitors alike. You can enjoy the familiar flavours of home and try new ones from friends and cultures unknown. We are open for business at the shop at 76 Lower Main Road, Observatory <a target="_blank" href="https://www.tapitapi.co.za/operatinghours">(operating hours)</a> Check out our online <a target="_blank" href="https://www.tapitapi.co.za/shop">store</a> for deliveries and other Tapi Tapi products beyond ice cream.',
      tags: [{ name: 'Black owned' }, { name: 'Cape Town' }],
      websiteDisplay: 'tapitapi.co.za',
      websiteUrl: 'https://www.tapitapi.co.za',
      instagram: '_tapi_tapi',
    },
    {
      name: 'Ukhamba Beerworx',
      img: '/assets/imgs/ukhamba-beerworx-profile.jpg',
      about: 'TODO TODO TODO TODO TODO',
      tags: [{ name: 'Beer' }, { name: 'Black owned' }],
      websiteDisplay: 'ukhambabeerworx.co.za',
      websiteUrl: 'https://www.ukhambabeerworx.co.za',
    },
    {
      img: '/assets/imgs/humble-coffee-profile.jpeg',
      name: 'Humble coffee',
      about: 'TODO TODO TODO TODO TODO',
      tags: [{ name: 'Coffee' }, { name: 'Female owned' }],
      websiteDisplay: 'humblecoffee.co.za',
      instagram: '_tapi_tapi',
    },
    {
      name: 'JFF',
      img: '/assets/imgs/JFF-rooftop-farm-profile.jpg',
      about: 'TODO TODO TODO TODO TODO',
      tags: [{ name: 'female owned' }, { name: 'black owned' }],
      websiteDisplay: 'jffrooftopfarm.business.site',
    },
    {
      img: '/assets/imgs/the-nest-profile.jpg',
      name: 'The Nest',
      about: 'TODO TODO TODO TODO TODO',
      tags: [{ name: 'female owned' }, { name: 'black owned' }],
      websiteDisplay: 'thenestspace.co.za',
      websiteUrl: 'http://thenestspace.co.za',
      instagram: '_tapi_tapi',

    },
    {
      img: '/assets/imgs/native-nosi-profile.png',
      name: 'Native Nosi',
      about: 'TODO TODO TODO TODO TODO',
      tags: [{ name: 'female owned' }, { name: 'black owned' }],
      websiteDisplay: 'nativenosi.co.za',
      websiteUrl: 'https://nativenosi.co.za/',
      instagram: '_tapi_tapi',
    },
    {
      img: '/assets/imgs/tolokazi-beer-profile.jpeg',
      name: 'Tolokazi beer',
      about: 'TODO TODO TODO TODO TODO',
      tags: [{ name: 'female owned' }, { name: 'black owned' }],
      websiteDisplay: 'ukhambabeerworx.co.za',
      websiteUrl: 'https://www.ukhambabeerworx.co.za',
      instagram: '_tapi_tapi',
    },
  ] as Company[];

  constructor(private spreadSheetService: SpreadSheetService) { }

  get companies(): Observable<Company[]> {

    if (location.hostname.includes('localhost') || location.hostname.includes('127.0.0.1')) {
      // return of(this._companies_old);
    }


    if (this._companies.length) {
      return of(this._companies);
    }

    const spreadSheetData = this.spreadSheetService.getSheetData();
    spreadSheetData.subscribe((companies) => {
      this._companies = companies;
    });
    return spreadSheetData;
  }

  initCompanies(): void {
    this.companies.subscribe((companies) => {
      this._companies = companies;
    });
  }
}
