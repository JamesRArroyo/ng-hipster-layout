import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abox-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
})
export class ButtonIconComponent implements OnInit {
  @Input()
  route = '#';
  @Input()
  icon = '';
  constructor() {}

  ngOnInit() {}
}
