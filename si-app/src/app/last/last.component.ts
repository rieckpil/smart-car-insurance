import { Component, OnInit } from '@angular/core';

import { SrvService } from '../srv.service';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {
  
  constructor(public s: SrvService) { }

  ngOnInit() {
  }

}
