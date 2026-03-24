import { Component } from '@angular/core';
import { Hero } from '../shared/home/hero';

@Component({
  selector: 'app-home',
  imports: [Hero],
  template: `
  <section>
    <app-hero />
  </section>
  `
})
export class Home {

}
