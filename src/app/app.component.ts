import { Component } from '@angular/core';
import { Goon } from './classes/goon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  goons: Array<Goon> = [];

  addGoon() {
       this.goons.push(new Goon());
  }

}
