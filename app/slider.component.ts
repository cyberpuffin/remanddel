import {Component, AfterViewInit} from '@angular/core';

import {Slider} from './slider';

declare var $: any;

@Component({
    selector: 'slider',
    templateUrl: 'templates/slider.html'
})

export class SliderComponent implements AfterViewInit{
  slider = SLIDER;
  ngAfterViewInit() {
    $('.slider').slider({full_width: true});
  }
}

var SLIDER: Slider[] = [
  { filename: 'depression-glass.png', alignment: 'center', caption: 'Depression Glass', color: 'black' },
  { filename: 'vintage-glassware.png', alignment: 'right', caption: 'Vintage Glassware', color: 'white' },
  { filename: 'vintage-toys.png', alignment: 'center', caption: 'Classic Toys', color: 'black' },
  { filename: 'vintage-childrens-clothing.png', alignment: 'left', caption: 'Vintage Children\'s Clothing', color: 'white' },
];
