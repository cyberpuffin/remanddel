import {Component} from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: 'templates/main.html'
})
export class AppComponent {
  page = 'home';
  setPage(newPage: string){
    this.page = newPage;
  }
}
