import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../../services/login-service.service';
import { Router } from '@angular/router';

declare var $;
@Component({
  selector: 'initlogin',
  templateUrl: './initlogin.component.html',
  styleUrls: ['./initlogin.component.css']
})
export class InitialLoginComponent implements OnInit {
  clientId: string = '';
  userName: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  who: string = '';
  constructor(private router: Router,  private LoginAPI: LoginServiceService) { }

  ngOnInit() {
    $("#oldpassword").focus();
  }

  ChangePassword(f) {
    f.controls['oldpassword'].markAsTouched();
    f.controls['newpassword'].markAsTouched();
    f.controls['confirmnewpassword'].markAsTouched();
    f.controls['accept'].markAsTouched();
    if (f.valid && this.oldPassword == this.newPassword) {
      this.clientId = localStorage.getItem('clientId');
      this.who = localStorage.getItem('who');
      this.LoginAPI.ChangePassword(this.clientId, this.userName, this.oldPassword, this.newPassword, this.who).subscribe((data: any) => {
        if (data) {
          this.router.navigate(['loginuser']);
        }
        else {
          //this.toastr.error('Record was Not Inserted !', 'Error!');
        }
      });
    }
    else {
      this.RequireFieldFocus(f);
    }
  }

  RequireFieldFocus(fields) {
    let target;
    for (var i in fields.controls) {
      if (!fields.controls[i].valid) {
        target = document.getElementsByName(i)[0];
        break;
      }
    }
    if (target) {
      //$('html,body').animate({ scrollTop: $(target).offset().top }, 'slow');
      $(target).focus();
    }

  }

  ConfirmPassword(confirmNewPwd, newPwd) {
    if (confirmNewPwd == '') {
      return "Enter a New Confirm Password";
    }
    else if (confirmNewPwd != newPwd)
      return "New Password and Confirm Password did not match";
  }
}
