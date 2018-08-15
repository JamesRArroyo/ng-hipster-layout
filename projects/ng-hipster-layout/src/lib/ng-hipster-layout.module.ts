import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgHipsterLayoutComponent } from './ng-hipster-layout.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [NgHipsterLayoutComponent],
  exports: [NgHipsterLayoutComponent]
})
export class NgHipsterLayoutModule { }
