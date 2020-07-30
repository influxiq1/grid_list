import { Component, OnInit } from '@angular/core';
declare var FB: any;

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId: '751874888892178',
        cookie: true,
        xfbml: true,
        version: 'v7.0'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      let js: any = d.getElementsByTagName(s)[0];
      const fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));



  }
  loginwithfb() {

    FB.login((response) => {
      if (response.status === 'connected') {
        // Logged into your webpage and Facebook.
        console.log(response, 'res');
      } else {
        console.log(response, 'res');
        // The person is not logged into your webpage or we are unable to tell.
      }
    }, { scope: 'public_profile,email' });

  }

}
