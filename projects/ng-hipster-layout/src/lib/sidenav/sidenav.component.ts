import { SidenavLink } from './../ng-hipster-layout.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abox-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input()
  links: SidenavLink[] = [];
  constructor() {}

  ngOnInit() {}
}
