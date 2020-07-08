import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'company-not-found',
  templateUrl: './company-not-found.component.html',
  styleUrls: ['./company-not-found.component.scss']
})
export class CompanyNotFoundComponent {

  @Input() companyName: string;

  constructor(private router: Router) { }

  onClick() {
    this.router.navigateByUrl('/');
  }
}
