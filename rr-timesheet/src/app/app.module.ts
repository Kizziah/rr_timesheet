import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent }     from './login.component';
import { AccountComponent }     from './account.component';
import { HomeComponent }     from './home.component';
import { UserComponent }     from './user.component';
import { ProfileComponent }     from './profile.component';
import { ContractComponent }     from './contract.component';
import { CalendarsComponent }     from './calendars.component';
import { LaborRatesComponent }     from './labor-rates.component';
import { TimesheetsComponent }     from './timesheets.component';
import { TimeOffComponent }     from './time-off.component';
import { ExpensesComponent }     from './expenses.component';
import { PTOComponent }     from './pto.component';
import { UserPreferencesComponent }     from './user-preferences.component';
import { SystemRolesComponent }     from './system-roles.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  RouterModule.forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: 'app', component: AppComponent },
                    { path: 'login', component: LoginComponent}, 
                    { path: 'account', component: AccountComponent },
                    { path: 'home', component: HomeComponent },
                    { path: 'user', component: UserComponent },
                    { path: 'profile', component: ProfileComponent },
                    { path: 'contract', component: ContractComponent },
                    { path: 'calendars', component: CalendarsComponent },
                    { path: 'labor-rates', component: LaborRatesComponent },
                    { path: 'timesheets', component: TimesheetsComponent},
                    { path: 'time-off', component: TimeOffComponent},
                    { path: 'expenses', component: ExpensesComponent},
                    { path: 'pto', component: PTOComponent},
                    { path: 'user-preferences', component: UserPreferencesComponent},
                    { path: 'system-roles', component: SystemRolesComponent}  
                  ])],
  declarations: [ AppComponent,
                  LoginComponent,
                  AccountComponent,
                  HomeComponent,
                  UserComponent,
                  ProfileComponent,
                  ContractComponent,
                  CalendarsComponent,
                  LaborRatesComponent,
                  TimesheetsComponent,
                  TimeOffComponent,
                  ExpensesComponent,
                  PTOComponent,
                  UserPreferencesComponent, 
                  SystemRolesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
