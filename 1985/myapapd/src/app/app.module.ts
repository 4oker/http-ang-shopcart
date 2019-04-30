import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { RoutingModule } from './routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { TotalcalculatorComponent } from './totalcalculator/totalcalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailInfoComponent,
    DashboardComponent,
    FilterPipe,
    TotalcalculatorComponent,
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
