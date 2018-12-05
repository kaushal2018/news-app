import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchVal: string;
  constructor(private apiSerivce: NewsapiService) {}

  ngOnInit() {
    this.apiSerivce.currentSearch.subscribe(
      searchVal => (this.searchVal = searchVal)
    );
  }

  searchText(val) {
    this.apiSerivce.postSearchText(val);
  }

  changeAction(obj) {
    //your logic here
    console.log(obj);
  }
}
