import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { GraphQLModule } from './graphql.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FetchEmployeeComponent } from './components/fetch-employee/fetch-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddEmployeeComponent,
    FetchEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'employee/fetch', component: FetchEmployeeComponent },
      { path: 'employee/add', component: AddEmployeeComponent },
      { path: 'employee/edit/:employeeId', component: AddEmployeeComponent },
    ]),
    GraphQLModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
