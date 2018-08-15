import { Component } from '@angular/core';
import { NgHipsterLayoutService, SidenavLink } from 'ng-hipster-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-hipster-layout-app';
  sidenavLinks: SidenavLink[] = [
    { title: 'Home', route: '/home', icon: 'fas fa-home' },
    { title: 'Dashboard', route: '/dashboard', icon: 'fas fa-tachometer-alt' },
    { title: 'Reports', route: '/reports', icon: 'fas fa-chart-pie' },
  ];

  constructor(private layoutService: NgHipsterLayoutService) {
    layoutService.setSidenavLinks(this.sidenavLinks);
  }
}
