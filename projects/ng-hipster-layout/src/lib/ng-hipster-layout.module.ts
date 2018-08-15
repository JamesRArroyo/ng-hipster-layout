import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgHipsterLayoutComponent } from './ng-hipster-layout.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [
    NgHipsterLayoutComponent,
    ButtonIconComponent,
    SidenavComponent,
  ],
  exports: [NgHipsterLayoutComponent],
})
export class NgHipsterLayoutModule {}
