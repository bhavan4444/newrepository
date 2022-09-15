import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FileComponent } from './file/file.component';
import { BubblechartComponent } from './charts/bubblechart/bubblechart.component';
import { SunburstchartComponent } from './charts/sunburstchart/sunburstchart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'employee-dashboard',
    component:EmployeeDashboardComponent
  },
  {
    path:'file',
    component:FileComponent
  },
  {
    path:'bubblechart',
    component:BubblechartComponent
  },
  {
    path:'sunburstchart',
    component:SunburstchartComponent
  },


  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
