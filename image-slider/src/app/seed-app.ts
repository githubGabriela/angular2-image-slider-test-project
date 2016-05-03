import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Uploader} from './components/uploader/uploader';
import {ImageSlider} from './components/image-slider/image-slider';

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html'
})
@RouteConfig([
  { path: '/uploader', component: Uploader,   name: 'Uploader', useAsDefault: true },
  { path: '/slider', component: ImageSlider, name: 'ImageSlider' }
  ])
export class SeedApp {

  constructor() {}

}
