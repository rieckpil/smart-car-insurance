import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SrvService {
  public name = '';
  public plz = '';
  public ort = '';
  public strasse = '';
  public fullprice = 0;
  public haftpflicht = 0;
  public teilkasko = 0;
  public  vollkasko = 0;
  public typ = '';
  public hersteller = '';
  public leistung = 0;

  haftpflichtChecked = false;
  teilkaskoChecked = false;
  vollkaskoChecked = false;

  loading = false;

  constructor(private http: HttpClient, private router: Router) { }


   // Uses http.get() to load data from a single API endpoint
  get(picture) {
    console.log('picture', picture);
    this.loading = true;
    return this.http.post('https://hukcoburg.riecks.io/api/insurance', {picture: picture}).subscribe(
      data => {
        this.addData(data);
        this.router.navigate(['/price']);
        this.loading = false;
      },
       err => {
        console.error(err);
        this.loading = false;
      },
      () => {
        console.log('done loading');
        this.loading = false;
      }
      );
  }

  addData(data){
    this.name = data.name;
    this.ort = data.stadt;
    this.strasse = data.strasse;
    this.plz = data.plz;
    this.hersteller = data.hersteller;
    this.typ = data.typ;
    this.leistung = data.leistung;
    this.haftpflicht = data.haftpflicht;
    this.vollkasko = data.vollkasko;
    this.teilkasko = data.teilkasko;

  
  }
}
