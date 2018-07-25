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
}
