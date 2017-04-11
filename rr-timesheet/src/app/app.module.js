"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login.component");
var account_component_1 = require("./account.component");
var home_component_1 = require("./home.component");
var user_component_1 = require("./user.component");
var profile_component_1 = require("./profile.component");
var contract_component_1 = require("./contract.component");
var calendars_component_1 = require("./calendars.component");
var labor_rates_component_1 = require("./labor-rates.component");
var timesheets_component_1 = require("./timesheets.component");
var time_off_component_1 = require("./time-off.component");
var expenses_component_1 = require("./expenses.component");
var pto_component_1 = require("./pto.component");
var user_preferences_component_1 = require("./user-preferences.component");
var system_roles_component_1 = require("./system-roles.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'app', component: app_component_1.AppComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'account', component: account_component_1.AccountComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'user', component: user_component_1.UserComponent },
                { path: 'profile', component: profile_component_1.ProfileComponent },
                { path: 'contract', component: contract_component_1.ContractComponent },
                { path: 'calendars', component: calendars_component_1.CalendarsComponent },
                { path: 'labor-rates', component: labor_rates_component_1.LaborRatesComponent },
                { path: 'timesheets', component: timesheets_component_1.TimesheetsComponent },
                { path: 'time-off', component: time_off_component_1.TimeOffComponent },
                { path: 'expenses', component: expenses_component_1.ExpensesComponent },
                { path: 'pto', component: pto_component_1.PTOComponent },
                { path: 'user-preferences', component: user_preferences_component_1.UserPreferencesComponent },
                { path: 'system-roles', component: system_roles_component_1.SystemRolesComponent }
            ])],
        declarations: [app_component_1.AppComponent,
            login_component_1.LoginComponent,
            account_component_1.AccountComponent,
            home_component_1.HomeComponent,
            user_component_1.UserComponent,
            profile_component_1.ProfileComponent,
            contract_component_1.ContractComponent,
            calendars_component_1.CalendarsComponent,
            labor_rates_component_1.LaborRatesComponent,
            timesheets_component_1.TimesheetsComponent,
            time_off_component_1.TimeOffComponent,
            expenses_component_1.ExpensesComponent,
            pto_component_1.PTOComponent,
            user_preferences_component_1.UserPreferencesComponent,
            system_roles_component_1.SystemRolesComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map