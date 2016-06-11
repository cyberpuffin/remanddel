import {Component} from '@angular/core';
import {HomepageComponent} from './homepage.component';
import {AboutpageComponent} from './aboutpage.component';

@Component({
    selector: 'main',
    templateUrl: 'templates/main.html',
    directives: [HomepageComponent, AboutpageComponent]
})
export class AppComponent {
  page = 'home';
  setPage(newPage: string){
    this.page = newPage;
  }
}
