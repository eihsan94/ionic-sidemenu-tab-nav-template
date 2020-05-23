import { Component, OnInit, Input } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent implements OnInit {
  @Input() title: String;
  isBrowser = Capacitor.platform === 'web';
  constructor() { }

  ngOnInit() {}

}
