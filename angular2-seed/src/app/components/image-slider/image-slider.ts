import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap';


@Component({
selector: 'image-slider',
templateUrl : 'app/components/image-slider/image-slider.html',
styleUrls : ['app/components/image-slider/image-slider.css'],
providers : [],
directives : [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class ImageSlider {
	public myInterval: number = 5000;
	public noWrapSlides: boolean = false;
	public slides:Array<any> = [];

	public constructor() {
		for (var i = 0; i < 4; i++) {
			this.addSlide();
		}
	}

 public addSlide() : void {
  let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });

 }
}
