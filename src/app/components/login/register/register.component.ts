// Login Dependencies
import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


// Services
import { ScriptService } from '../../../services/script.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

    constructor(
      private scriptService:ScriptService,
  		private router:Router
    ) {

    }

    ngOnInit() {
      this.scriptService.load('scriptsJS', 'loginIndexJS', 'lang-selectJS', 'mdb-minJS').then(data => {
        console.log('script loaded ', data);
      }).catch(error => console.log(error));
    }

    onRegisterSubmit() {
      console.log('This will be where you connect to your authorization service');
  	}

}
