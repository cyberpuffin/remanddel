import {Component, AfterViewInit} from '@angular/core';
declare var $:JQueryStatic;

@Component({
    selector: 'aboutpage',
    templateUrl: 'templates/aboutpage.html',
})

export class AboutpageComponent implements AfterViewInit{
  ngAfterViewInit() {
    $('.carousel').carousel();
    //$('.slider').slider({full_width: true});
  }
}
