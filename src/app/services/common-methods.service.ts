import { Injectable } from '@angular/core';
declare var $: any;
declare var _: any;
@Injectable()
export class CommonMethodsService {

  constructor() { }

  SetPageHeight() {
    var pageClass = '.page-login';
    var $win = $(window);
    var $header = $(pageClass + '__header');
    var $footer = $(pageClass + '__footer');
    var $body = $(pageClass + '__body');
    var $helpScrim = $(pageClass + '__desktop-help-scrim');
    var $helpPanel = $(pageClass + '__desktop-help-panel');

    if ($body.hasClass('is-relative')) {
      var checkContentHeight = function checkContentHeight() {
        if ($win.width() < 768) return;

        var pad = 200;
        var availH = $win.height() - ($header.height() + $footer.height()) - pad;
        $footer.toggleClass('is-fixed', availH > $body.height());
      };

      $win.on('resize', _.debounce(checkContentHeight, 200));
      checkContentHeight();
    }
  }
}
