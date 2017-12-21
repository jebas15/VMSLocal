import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
//import { NgProgressService } from 'ngx-progressbar';
import { Location } from '@angular/common';
import { ScriptService } from './services/script.service';

declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;

  route: string;
  bodyRef: string;

  constructor(
    // public progressService: NgProgressService,
    private location: Location,
    private router: Router,
    private http: HttpClient,
    private scriptService: ScriptService) {

    // Load Body Class Element for each Page
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
        if (this.route === "/home") {
          //this.bodyRef = "avms-index";
          $('body').attr('class', 'avms-index');
        } else if (this.route === "/roleselect" || this.route === "/register" || this.route === "/loginuser" || this.route === "/invalidinput" || this.route === "/forgotusrname" || this.route === "/forgotusrnmresp" || this.route === "/forgotpw" || this.route === "/forgotpwresp" || this.route === "/secquestions" || this.route === "/initlogin") {
          // this.bodyRef = "page-login";
          $('body').attr('class', 'page-login');
        } else if (this.route === "/dashboard/data" || this.route === "/dashboard/nodata") {
          // this.bodyRef = "page-dashboard nav-bar-expanded";
          $('body').attr('class', 'page-dashboard nav-bar-expanded');
        } else if (this.route === "/dashboard/list" || this.route === "/dashboard/listnames") {
          //this.bodyRef = "page-lists";
          $('body').attr('class', 'page-lists');
        } else if (this.route === "/dashboard/jobrecordhire") {
          // this.bodyRef = "page-job-record";
          $('body').attr('class', 'page-job-record');
        } else if (this.route === "/gridlayout") {
          // this.bodyRef = "page-grid-example";
          $('body').attr('class', 'page-grid-example');
        } else {
          //this.bodyRef = "page-login";
          $('body').attr('class', 'page-login');
        }
        this.loadOnloadScript(this.route)
      } else {
        //this.route = '/home'
        $('body').attr('class', 'page-login');
        this.loadOnloadScript('')
      }
    });

  }
  loadOnloadScript(Page) {
    if (this.route === "/roleselect" || this.route === "/register" || this.route === "/loginuser" || this.route === "/invalidinput" || this.route === "/forgotusrname" || this.route === "/forgotusrnmresp" || this.route === "/forgotpw" || this.route === "/forgotpwresp" || this.route === "/secquestions" || this.route === "/initlogin") {
      this.scriptService.loadOnloadScript('Login');
    } else if (this.route === "/dashboard/data" || this.route === "/dashboard/nodata") {

    } else if (this.route === "/dashboard/list" || this.route === "/dashboard/listnames") {

    } else if (this.route === "/dashboard/jobrecordhire") {

    } else if (this.route === "/gridlayout") {

    } else {
      this.scriptService.loadOnloadScript('Login');
    }
  }
  ngOnInit() {

  }

}

