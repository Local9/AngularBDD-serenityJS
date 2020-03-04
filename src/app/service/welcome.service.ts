import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class WelcomeService {
  constructor(private http: HttpClient) { }

  getWelcome() {
    return this.http.get('/api/v1/welcome');
  }
}
