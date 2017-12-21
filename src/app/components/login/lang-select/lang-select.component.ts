import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/platform-browser';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.css']
})
export class LangSelectComponent implements OnInit {
  optionsSelect: Array<any>;
  constructor(private translate: TranslateService,
    @Inject(DOCUMENT) private document, private LoginAPI: LoginServiceService) { }

  ngOnInit() {
    this.GetLanguages();
  }

  GetLanguages() {
    this.LoginAPI.GetLanguages().subscribe((data: any) => {
      console.log(data);
    });

  }

  selected = 1;

  changeListener() {
    //console.log(Language);
    let Language = this.selected;
    console.log(Language);
    if (Language == 1) {
      this.translate.use('en');
    }
    else if (Language == 2) {
      this.translate.use('fr');
    }
    else if (Language == 3) {
      this.translate.use('du');
    }
    else if (Language == 4) {
      this.translate.use('sp');
    }
  }


}
