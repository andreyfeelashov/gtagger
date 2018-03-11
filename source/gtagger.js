import loadScript from 'load-script';


const GTAG_SCRIPT_BASE_URL = 'https://www.googletagmanager.com/gtag/js?id=';

export class Gtagger {

  static initialize(trackingId) {
    if (!Array.isArray(window.dataLayer)) {
      window.dataLayer = [];
    }

    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    this.run('js', new Date());
    this.run('config', trackingId);

    try {
      loadScript(`${GTAG_SCRIPT_BASE_URL}${trackingId}`);
    } catch (error) {
      console.error(error);
    }
  }

  static run(...parameters) {
    try {
      window.gtag(...parameters);
    } catch (error) {
      console.error(error);
    }
  }

}
