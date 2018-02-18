import loadScript from 'load-script';


const GTAG_SCRIPT_BASE_URL = 'https://www.googletagmanager.com/gtag/js?id=';

export function ga(trackingId) {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  gtag('js', new Date());
  gtag('config', trackingId);

  loadScript(`${GTAG_SCRIPT_BASE_URL}${trackingId}`);
}

export function gtag(...parameters) {
  window.gtag(...parameters);
}
