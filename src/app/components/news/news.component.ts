import { Component } from '@angular/core';
import { INewsItem } from '../../models/NewsItem';
import { NewsapiService } from '../../services/newsapi.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  _latestPostsArray: INewsItem[];
  _subsequentPostsArray: INewsItem[];
  _otherPostsArray: INewsItem[];
  loading: boolean = false;
  private apiURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a5be5de32d6499ab6e220edba08d205`;
  private otherNewsApiURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=9a5be5de32d6499ab6e220edba08d205';

  constructor(
    private http: Http,
    private router: Router,
    private apiSerivce: NewsapiService
  ) {
    this.loading = true;
    switch (this.router.url.substring(1).toUpperCase()) {
      case 'BUSINESS': {
        this.apiURL = `https://newsapi.org/v2/everything?q=business&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'ENTERTAINMENT': {
        this.apiURL = `https://newsapi.org/v2/everything?q=entertainment&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'GENERAL': {
        this.apiURL = `https://newsapi.org/v2/everything?q=general&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'HEALTH': {
        this.apiURL = `https://newsapi.org/v2/everything?q=health&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'SCIENCE': {
        this.apiURL = `https://newsapi.org/v2/everything?q=science&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'SPORTS': {
        this.apiURL = `https://newsapi.org/v2/everything?q=sports&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'TECHNOLOGY': {
        this.apiURL = `https://newsapi.org/v2/everything?q=technology&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'HOME': {
        this.apiURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'US': {
        this.apiURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'UK': {
        this.apiURL = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
      case 'IN': {
        this.apiURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9a5be5de32d6499ab6e220edba08d205`;
        this.getNewsFromService(this.apiURL);
        break;
      }
    }
  }

  getNewsFromService(apiURL) {
    this._latestPostsArray = this.apiSerivce.getlatestNewsResponse(apiURL);
    this._subsequentPostsArray = this.apiSerivce.getSubsequentNewsResponse(
      apiURL
    );
    this._otherPostsArray = this.apiSerivce.getOtherNewsResponse(
      this.otherNewsApiURL
    );
    this.loading = false;
  }

  redirectTo(url) {
    window.open(url, '_blank');
  }

  ngOnInit() {}
}
