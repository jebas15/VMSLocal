import { Component, ViewEncapsulation, OnInit} from '@angular/core';

// Services
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private scriptService:ScriptService,
  ) {}

  ngOnInit() {
    this.scriptService.load(
      'commonJS',
      'utilsJS',
      'indexJS',
      'nav-barJS',
      'bannerJS',
      'dashIndexJS',
      'dashCalJS',
      'vendorMomentMinJS',
      'vendorMomentTZJS',
      'vendorCalJS',
      'vendorJqueryTouchJS',
      'vendorAddToCalJS',
      'mdb-minJS',
      'vendorPerfScrollbarJS',
      'vendorSlickMinJS')
      .then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }

}
