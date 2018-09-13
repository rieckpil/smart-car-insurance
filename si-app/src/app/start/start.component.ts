import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SrvService} from '../srv.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
//  form: FormGroup;
  loading = false;
  picture: any;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(public s: SrvService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onFileChange(event) {
    this.s.error = false;
 
    this.s.error = false;
    if (event.target.files && event.target.files.length > 0) {
      this.picture = event.target.files[0];
    }
  }

  onSubmit() {
    this.s.get(this.picture);
  }
}
