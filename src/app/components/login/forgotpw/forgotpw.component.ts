// Login Dependencies
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

// Services
import { ScriptService } from '../../../services/script.service';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrls: ['./forgotpw.component.css']
})
export class ForgotPWComponent implements OnInit {
  txtUserName: string;
  email: String;
  @ViewChild('InputUN') InputUN: ElementRef;
  constructor(
    private scriptService: ScriptService,
    private router: Router,
    private LoginAPI: LoginServiceService
  ) {

  }

  ngOnInit() {
    this.scriptService.load('scriptsJS', 'loginIndexJS', 'lang-selectJS', 'mdb-minJS').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));

  }

  onForgotPWSubmit() {
    if (this.txtUserName != null) {
      var UserName = this.txtUserName;
      var UserID = 10;

      // this.LoginAPI.ForgetPassword(12, UserName, UserID).subscribe((data: any) => {
      //   if (data != null && data[0] != null) {

      //   }
      // });
      this.router.navigate(['forgotpwresp']);
    }
    else {
      this.InputUN.nativeElement.focus();
    }
  }

}
