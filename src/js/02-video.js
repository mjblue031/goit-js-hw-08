//import lodash
import throttle from 'lodash.throttle';
try {
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
  player.on('timeupdate', throttle(throttledTime, 1000));

  let currTime = localStorage.getItem('videoplayer-current-time');
  if (currTime <= 0) {
    player.setCurrentTime(0); 
  }
  else {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time')); 
  }
} catch (error) {
  console.log(error);
}
