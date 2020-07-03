import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  searchFocus: boolean;
  title = 'angular-material-app';

  onSearchFocus(state: boolean): void {
    console.log('----<<<', state);

    setTimeout(() => this.searchFocus = state, 100);
  }
}
