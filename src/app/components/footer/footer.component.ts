import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isLightDisabled: boolean = true;
  isDarkDisabled: boolean = false;
  @Output() themeValEvent = new EventEmitter<string>();
  constructor() {}
  changeTheme(val) {
    if (val == 'light') {
      this.isDarkDisabled = false;
      this.isLightDisabled = true;
    } else {
      this.isLightDisabled = false;
      this.isDarkDisabled = true;
    }
    this.themeValEvent.emit(val);
  }
  ngOnInit() {}
}
