import { NewsItem } from './../models/NewsItem';
import {
  HttpModule,
  Http,
  URLSearchParams,
  Headers,
  RequestOptions
} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsapiService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: NewsItem[];
  promise;
  apiURL;
  constructor(private http: Http) {}

  search(term: string) {
    this.promise = new Promise((resolve, reject) => {
      this.apiURL = `${this.apiRoot}?term=${term}&media=music&limit=10`;
      this.http
        .get(this.apiURL)
        .toPromise()
        .then(
          res => {
            // Success
            // console.log(res.json());
            // this.results = res.json().results;
            this.results = res.json().results.map(item => {
              // return new NewsItem(
              // item.author,
              // item.artistName,
              // item.trackViewUrl,
              // item.artworkUrl30,
              // item.artistId
              // );
            });
            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return this.promise;
  }
}
