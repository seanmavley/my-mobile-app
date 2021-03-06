import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

