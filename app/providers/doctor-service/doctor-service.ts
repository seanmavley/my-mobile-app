import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DoctorService {

  url = 'data/doctors.json'
  constructor(private http: Http) {
    this.http = http;
  }

  load() {
    return this.http.get(this.url)
      .map(res => res.json())
      .map(data => data);
  }
}

