import { Injectable } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Injectable()
export class LoginServiceService {

  constructor(private ApiService: ApiserviceService) {

  }

  GetLanguages() {
    var url = '/globals/languages';
    return this.ApiService.GetData(url);
  }

  ForgotPassword(ClientID, UserName, Who) {
    var Url = '/users/forgot-password?clientId=' + ClientID + '&userName=' + UserName + '&who=' + Who;
    return this.ApiService.PutData(Url, null);
  }

  ForgotUserName(clientId, email, UserID) {
    var Url = '/users/forgot-username?clientId=' + clientId + '&email=' + email + '&who=' + UserID;
    return this.ApiService.PutData(Url, null);
  }

  //Change password
  ChangePassword(clientId, userName, oldPassword, newPassword, who) {
    var Url = '/users/change_password?clientId=' + clientId + '&userName=' + userName + '&oldPassword=' + oldPassword + '&newPassword=' + newPassword + '&who=' + who;
    return this.ApiService.PutData(Url, null);
  }
  //ClientLogin
  Loginsubmit(clientId, userName, password, UserID) {
    var Url = '/users/token?clientId=' + clientId + '&userName=' + userName + '&password=' + password + '&who=' + UserID;
    return this.ApiService.PostData(Url, null);
  }

}


