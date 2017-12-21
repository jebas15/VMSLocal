import { Component, OnInit } from '@angular/core';
import { CommonMethodsService } from '../../../services/common-methods.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginServiceService} from '../../../services/login-service.service';
@Component({
  selector: 'secquestions',
  templateUrl: './secquestions.component.html',
  styleUrls: ['./secquestions.component.css']
})
export class SecurityQNComponent implements OnInit {
  model: any = { color: "", band: "", dessert: "", school: "", married: "" }
    constructor(private http: HttpClient,private route: Router,private Common:CommonMethodsService,  private LoginAPI: LoginServiceService) {}

    ngOnInit() {
      this.Common.SetPageHeight();
    }
    save() {
      let i = 0;
      for (var key in this.model) {
        if (this.model[key].trim() != "" && this.model[key] != null) {
          i = i + 1;
        }
      }
      if (i >= 3) {
      //  var obj={
      //   color:this.model.color,
      //   band:this.model.band,
      //   dessert:this.model.dessert,
      //   school:this.model.school,
      //   married:this.model.married
      //   }
      //    this.LoginAPI.Securityquestn(obj).subscribe(data=>{
      //      alert("Insert Successfully");
      //    })
        this.route.navigate(['FirstTime']);
       
      }
      else {
        alert("Please Enter Atleast 3 Field");
      }
  
    }
}
