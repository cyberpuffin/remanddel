import {Component} from '@angular/core';
import {SliderComponent} from './slider.component';

@Component({
    selector: 'homepage',
    templateUrl: 'templates/homepage.html',
    directives: [SliderComponent]
})

export class HomepageComponent{ }
