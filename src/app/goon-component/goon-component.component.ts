import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Goon } from '../classes/goon';

@Component({
  selector: 'app-goon-component',
  templateUrl: './goon-component.component.html',
  styleUrls: ['./goon-component.component.css']
})

export class GoonComponentComponent implements OnInit {
  @Input() goon: Goon;
  REFval = new FormControl('');
  d10Roll = new FormControl('');
  totalREFval : number = 0;


  constructor() { }

  ngOnInit() {
    console.log('Created goon is :',this.goon)
  }

  addbits(s){
    console.log(s);
    var total= 0, s= s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while(s.length){
        total+= parseFloat(s.shift());
    }
    this.totalREFval = total;
  }



}
