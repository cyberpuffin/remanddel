import {Component, AfterViewInit} from '@angular/core';

@Component({
    selector: 'homepage',
    templateUrl: 'templates/homepage.html',
})

export class HomepageComponent implements AfterViewInit{
  ngAfterViewInit() {
    //$('.carousel').carousel();
    $('.slider').slider({full_width: true});
  }
}
