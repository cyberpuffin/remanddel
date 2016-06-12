import {Component, AfterViewInit} from '@angular/core';

@Component({
    selector: 'homepage',
    templateUrl: 'templates/homepage.html',
})

export class HomepageComponent implements AfterViewInit{
  ngAfterViewInit() {
    $('.slider').slider({full_width: true});
  }
}
