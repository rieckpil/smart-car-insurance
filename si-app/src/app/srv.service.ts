import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SrvService {
  public name = '';
  public plz = '';
  public ort = '';
  public strasse = '';
  public fullprice = 0;
  public hubraum = '';
  public haftpflicht = 0;
  public teilkasko = 0;
  public vollkasko = 0;
  public typ = '';
  public hersteller = '';
  public leistung = 0;
  public error = false;

  haftpflichtChecked = false;
  teilkaskoChecked = false;
  vollkaskoChecked = false;

  loading = false;

  constructor(private http: HttpClient, private router: Router) {
  }


  // Uses http.get() to load data from a single API endpoint
  get(picture) {
    console.log('picture', picture);

    const formData = new FormData();
    formData.append('file', picture);


    this.loading = true;
    return this.http.post(environment.apipath + '/v1/vehicle/registrationdocument/huk', formData).subscribe(
      data => {
        this.addData(data);
        this.router.navigate(['/price']);
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      },
      () => {
        console.log('done loading');
        this.loading = false;
      }
    );
  }

  addData(data) {
    // this.name = data.name;
    // this.ort = data.stadt;
    // this.strasse = data.strasse;
    // this.plz = data.plz;
    this.hersteller = data.manufacturer;
    this.typ = data.type;
    this.leistung = data.power;
    this.haftpflicht = data.liabilityInsurance;
    this.vollkasko = data.fullyComprehensiveInsurance;
    this.teilkasko = data.partlyComprehensiveInsurance;
    this.hubraum = data.cubicCapacity;
  }
}
