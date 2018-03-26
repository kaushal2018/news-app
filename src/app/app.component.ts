import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  exportAs: 'routerLinkActive'
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router, private titleService: Title) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = event.url.substr(1) !== '' ? event.url.substr(1) : 'Home';
        this.titleService.setTitle(this.title.toUpperCase() + ' - NewsAPI');
      }
    });
  }
}
