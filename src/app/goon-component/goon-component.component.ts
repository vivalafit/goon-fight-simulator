import { Component, OnInit, Input } from '@angular/core';
import { Goon } from '../classes/goon';

@Component({
  selector: 'app-goon-component',
  templateUrl: './goon-component.component.html',
  styleUrls: ['./goon-component.component.css']
})

export class GoonComponentComponent implements OnInit {
  @Input() goon: Goon;
  //@Input('master') masterName: string;
  constructor() { }

  ngOnInit() {
    console.log('Created goon is :',this.goon)
  }

}
