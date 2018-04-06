import '../css/app.scss';

import './slider/sliderDOM';

import './maps';

import './menu/menus';


if(navigator.serviceWorker)
    navigator.serviceWorker.register('../../sw.js');

