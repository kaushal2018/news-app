import { Component, OnInit } from '@angular/core';
import { INewsItem } from '../../models/NewsItem';
import { NewsapiService } from '../../services/newsapi.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  _latestPostsArray: INewsItem[];
  _subsequentPostsArray: INewsItem[];
  _otherPostsArray: INewsItem[];
  loading: boolean = false;
  getSearchText: string;
  private apiURL;
  private otherNewsApiURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=9a5be5de32d6499ab6e220edba08d205';

  constructor(
    private http: Http,
    private router: Router,
    private apiSerivce: NewsapiService
  ) {
    this.loading = true;
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

  ngOnInit() {
    this.apiSerivce.currentSearch.subscribe(getSearchText => {
      this.getSearchText = getSearchText;
      if (this.getSearchText !== '') {
        this.apiURL = `https://newsapi.org/v2/everything?q=${
          this.getSearchText
        }&apiKey=9a5be5de32d6499ab6e220edba08d205`;
      } else {
        this.apiURL = `https://newsapi.org/v2/everything?q=news&apiKey=9a5be5de32d6499ab6e220edba08d205`;
      }
      this.getNewsFromService(this.apiURL);
    });
  }
}
