import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SrvService {
  public hsn = '';
  public tsn = '';
  public error = false;
  loading = false;

  constructor(private http: HttpClient, private router: Router) {
  }


  // Uses http.get() to load data from a single API endpoint
  get(picture) {
    console.log('picture', picture);
    this.loading = true;
    return this.http.post(environment.apiServer + '/api/insurance', {picture: picture}).subscribe(
      data => {
        this.addData(data);
        this.router.navigate(['/data']);
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
    this.hsn = data.hsn;
    this.tsn = data.tsn;
  }
}
