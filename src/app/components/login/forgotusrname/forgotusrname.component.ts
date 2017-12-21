// Login Dependencies
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

// Services
import { ScriptService } from '../../../services/script.service';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'forgotusrname',
  templateUrl: './forgotusrname.component.html',
  styleUrls: ['./forgotusrname.component.css']
})
export class ForgotUNComponent implements OnInit {

  email: string = '';
  @ViewChild('nameit') nameit: ElementRef;

  constructor(
    private scriptService: ScriptService,
    private router: Router,
    private LoginAPI: LoginServiceService
  ) {

  }

  ngOnInit() {
   
  }

  onForgotUNSubmit(inputctr) {
    // inputctr.controls['email'].markAsTouched();
    if (inputctr.valid) {

      var ClientID = 10;
      var UserID = 12;

      // this.LoginAPI.ForgetUserName(ClientID, this.email, UserID).subscribe((data: any) => {
      //   if (data != null) {
      //     this.router.navigate(['ForgotUsernameResp']);
      //   }
      // });
      this.router.navigate(['forgotusrnmresp']);

    }
    else {
      this.nameit.nativeElement.focus();
    }
  }

}
