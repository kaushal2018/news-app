import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  themeVal: string = 'light';
  @Output() themeValEvent = new EventEmitter<string>();
  constructor() {}
  changeTheme(val) {
    this.themeVal = val;
    this.themeValEvent.emit(this.themeVal);
  }
  ngOnInit() {}
}
