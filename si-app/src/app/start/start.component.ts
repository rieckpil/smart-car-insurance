import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SrvService } from '../srv.service';


 
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

  constructor(public s: SrvService,  private route: ActivatedRoute) { }

  ngOnInit() {  }

  onFileChange(event) {
    this.s.error=false;
    const reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const data = reader.result.split(',');
        console.log('File', );
        this.picture = data[1];
      };
    }
  }

  onSubmit() {
    this.s.get(this.picture);
  }
}
