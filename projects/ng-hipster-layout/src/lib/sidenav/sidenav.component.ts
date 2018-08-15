import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abox-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  items: any = [
    { title: 'Home', route: '/home', icon: 'fas fa-home' },
    { title: 'Dashboard', route: '/dashboard', icon: 'fas fa-tachometer-alt' },
    { title: 'Reports', route: '/reports', icon: 'fas fa-chart-pie' },
  ];
  constructor() {}

  ngOnInit() {}
}
