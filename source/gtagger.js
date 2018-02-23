import loadScript from 'load-script';


const GTAG_SCRIPT_BASE_URL = 'https://www.googletagmanager.com/gtag/js?id=';

export class Gtagger {

  static initialize(trackingId) {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    this.run('js', new Date());
    this.run('config', trackingId);

    loadScript(`${GTAG_SCRIPT_BASE_URL}${trackingId}`);
  }

  static run(...parameters) {
    window.gtag(...parameters);
  }

}
