import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgHipsterLayoutComponent } from 'ng-hipster-layout';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: NgHipsterLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: HomeComponent },
      { path: 'reports', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
