import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RssService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RssService {

  url = 'https://blog.khophi.co/api/get_recent_posts/'
  constructor(private http: Http) {
    this.http = http;
  }

  load() {
    return this.http.get(this.url)
      .map(res => res.json())
      .map(data => data.posts);
  }

}

