import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'login',
  moduleId: module.id,
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',

})

export class LoginComponent  { /*name = 'PostIt';*/
    public auth2: any;
public googleInit() {
  let that = this;
  gapi.load('auth2', function () {
    that.auth2 = gapi.auth2.init({
      client_id: '841258378396-krepeotkjmejstfka5khim8sn4tj40rg.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      scope: 'profile email'
    });
    that.attachSignin(document.getElementById('googleBtn'));
  });
}
public attachSignin(element: any) {
  let that = this;
  this.auth2.attachClickHandler(element, {},
    function (googleUser: any) {

      let profile = googleUser.getBasicProfile();
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
}

ngAfterViewInit(){
    this.googleInit();
}

}
