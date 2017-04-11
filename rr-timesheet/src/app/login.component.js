"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.googleInit = function () {
        var that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '841258378396-krepeotkjmejstfka5khim8sn4tj40rg.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            that.attachSignin(document.getElementById('googleBtn'));
        });
    };
    LoginComponent.prototype.attachSignin = function (element) {
        var that = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            //YOUR CODE HERE
        }
        /* OPTIONAL ERROR MESSAGE on close
        , function (error: any) {
          alert(JSON.stringify(error, undefined, 2));
        }*/
        );
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        moduleId: module.id,
        styleUrls: ['./login.component.css'],
        templateUrl: './login.component.html',
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map