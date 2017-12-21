import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roleselect',
  templateUrl: './roleselect.component.html',
  styleUrls: ['./roleselect.component.css']
})
export class RoleSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  SetRole(Role) {
    if (Role == 'Client') {
      localStorage.setItem('who', 'ClientUser');
      localStorage.setItem('clientId', 'default');
      localStorage.setItem("VMSVersion", "1");
      localStorage.setItem("culture", "en-US");
    }
  }
}
