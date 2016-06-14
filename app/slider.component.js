"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SliderComponent = (function () {
    function SliderComponent() {
        this.slider = SLIDER;
    }
    SliderComponent.prototype.ngAfterViewInit = function () {
        $('.slider').slider({ full_width: true });
    };
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'slider',
            templateUrl: 'templates/slider.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
var SLIDER = [
    { filename: 'depression-glass.png', alignment: 'center', caption: 'Depression Glass', color: 'black' },
    { filename: 'vintage-glassware.png', alignment: 'right', caption: 'Vintage Glassware', color: 'white' },
    { filename: 'vintage-toys.png', alignment: 'center', caption: 'Classic Toys', color: 'black' },
    { filename: 'vintage-childrens-clothing.png', alignment: 'left', caption: 'Vintage Children\'s Clothing', color: 'white' },
];
//# sourceMappingURL=slider.component.js.map