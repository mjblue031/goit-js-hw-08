//import lodash
import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

//handle throttle
let throttledTime = function (dta) {
  let secondsTime = dta.seconds;
  console.log(secondsTime);
  localStorage.setItem('videoplayer-current-time', secondsTime);
};

//get the time update
try {
  player.on('timeupdate', throttle(throttledTime, 1000));
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
  console.log(error);
}
