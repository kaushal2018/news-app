import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {
  HttpModule,
  Http,
  Response,
  URLSearchParams,
  Headers,
  RequestOptions
} from '@angular/http';
import { INewsItem } from '../models/NewsItem';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsapiService {
  private inputSource = new BehaviorSubject<string>('news');
  currentSearch = this.inputSource.asObservable();
  constructor(private http: Http) {}

  getData(apiURL) {
    return this.http.get(apiURL).map(res => <INewsItem[]>res.json());
  }

  getlatestNewsResponse(apiURL) {
    let latestNewsList: INewsItem[] = [];
    let count = 0;
    this.getData(apiURL).subscribe(data => {
      data['articles'].forEach(element => {
        if (element.urlToImage) {
          count++;

          if (count <= 2) latestNewsList.push(element);
        }
      });
    });
    return latestNewsList;
  }

  getSubsequentNewsResponse(apiURL) {
    let subNewsList: INewsItem[] = [];
    let count = 0;
    this.getData(apiURL).subscribe(data => {
      data['articles'].forEach(element => {
        if (element.urlToImage) {
          count++;

          if (count > 2 && count <= 8) subNewsList.push(element);
        }
      });
    });
    return subNewsList;
  }

  getOtherNewsResponse(otherNewsApiURL) {
    let otherNewsList: INewsItem[] = [];
    let count = 0;
    this.getData(otherNewsApiURL).subscribe(data => {
      data['articles'].forEach(element => {
        if (element.urlToImage) {
          count++;

          if (count <= 4) otherNewsList.push(element);
        }
      });
    });
    return otherNewsList;
  }

  postSearchText(inputVal: string) {
    this.inputSource.next(inputVal);
  }
}
