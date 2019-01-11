import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WelcomeService {
  constructor(private http: Http) { }

  getWelcome() {
    return this.http.get('/api/v1/welcome').map(response => response.json())
    .catch((error: Response | any) => {
      return Observable.throw(error.json());
    }).toPromise();
  }
}
