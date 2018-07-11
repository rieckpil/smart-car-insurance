import { Component, OnInit } from '@angular/core';

import { SrvService } from '../srv.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  constructor(public s: SrvService) { }

  ngOnInit() {
  }

  haftpflichtChanged(ev){
    this.s.haftpflichtChecked = !this.s.haftpflichtChecked;
    this.calculate(ev);
  }

  teilkaskoChanged(ev){
    this.s.teilkaskoChecked = !this.s.teilkaskoChecked ;
    this.calculate(ev);
  }

  vollkaskoChanged(ev){
    this.s.vollkaskoChecked = !this.s.vollkaskoChecked;
    this.calculate(ev);
  }

  get btnDisabled(): boolean{
    return this.s.fullprice <= 0;
  }

  calculate(ev): void {
    let price = 0;
    if( this.s.haftpflichtChecked === true) {
      price = price + this.s.haftpflicht;
    }
    if( this.s.teilkaskoChecked=== true) {
      price = price + this.s.teilkasko;
    }
    if( this.s.vollkaskoChecked=== true) {
      price = price + this.s.vollkasko;
    }

    this.s.fullprice = price;
  }

}
