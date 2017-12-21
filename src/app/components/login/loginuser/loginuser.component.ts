// Login Dependencies
import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
declare var $;

// Services
import { ScriptService } from '../../../services/script.service';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginUserComponent implements OnInit {

  username: String;
  password: String;
  clientId: string = '';
  UserID: string = '';

  constructor(
    private scriptService: ScriptService,
    private router: Router,
    private LoginAPI: LoginServiceService
  ) {

  }

  ngOnInit() {
    this.scriptService.loadOnloadScript('ClientLogin');
  }

  // onLoginSubmit() {
  //   console.log('This will be where you connect to your authorization service');
  // }
  onLoginSubmit(f) {
    f.controls['username'].markAsTouched();
    f.controls['password'].markAsTouched();
    this.clientId = localStorage.getItem('clientId');
    this.UserID = localStorage.getItem('who');
    if (f.valid) {
      // this.LoginAPI.LoginsubmitInsert(this.clientId, this.username, this.password, this.UserID).subscribe((data: any) => {
      //   if (data) {
      //     this.router.navigate(['secquestions']);
      //   }
      //   else {
      //     //this.toastr.error('Record was Not Inserted !', 'Error!');
      //   }
      // });
        this.router.navigate(['secquestions']);
    }
    else {
      this.FocusRequiredField(f);
    }
  }
  FocusRequiredField(f) {
    let target;
    for (var i in f.controls) {
      if (!f.controls[i].valid) {
        target = document.getElementsByName(i)[0];
        break;
      }
    }
    if (target) {
      $('html,body').animate({ scrollTop: $(target).offset().top }, 'slow');
      $(target).focus();
    }
  }
}
