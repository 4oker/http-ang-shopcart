import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DetailInfoComponent} from './detail-info/detail-info.component';
import {ListComponent} from './list/list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TotalcalculatorComponent} from './totalcalculator/totalcalculator.component'
const routes: Routes = [
 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cartProducts', component: DashboardComponent },
  { path: 'detail/:id', component: DetailInfoComponent },
  { path: 'products', component: ListComponent },
  { path: 'totalcalculator', component: TotalcalculatorComponent },
  
  
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
