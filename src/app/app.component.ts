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
  isLight: boolean = false;
  isDark: boolean = false;
  constructor(private router: Router, private titleService: Title) {}
  themeVal: string;
  receiveThemeValue($event) {
    this.themeVal = $event;
    if (this.themeVal == 'light') {
      this.isLight = true;
      this.isDark = false;
    }
    if (this.themeVal == 'dark') {
      this.isDark = true;
      this.isLight = false;
    }
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = event.url.substr(1) !== '' ? event.url.substr(1) : 'Home';
        this.titleService.setTitle(this.title.toUpperCase() + ' - NewsAPI');
      }
    });
  }
}
