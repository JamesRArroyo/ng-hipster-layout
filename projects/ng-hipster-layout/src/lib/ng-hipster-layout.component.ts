import {
  SidenavLink,
  NgHipsterLayoutService,
} from './ng-hipster-layout.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'abox-ng-hipster-layout',
  templateUrl: './ng-hipster-layout.component.html',
  styleUrls: ['./ng-hipster-layout.component.scss'],
})
export class NgHipsterLayoutComponent implements OnInit {
  links$: Observable<SidenavLink[]>;
  constructor(private layoutService: NgHipsterLayoutService) {}

  ngOnInit() {
    this.links$ = this.layoutService.sidenavLinks;
  }
}
