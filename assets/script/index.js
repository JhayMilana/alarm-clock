'use strict';

function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let session = document.querySelector('#session');

  if(hrs >= 12) {
    session.innerHTML = 'PM';
  } else {
    session.innerHTML = 'AM';
  };

  if(hrs > 12) {
    hrs = hrs - 12;
  }

  document.querySelector('#hours').innerHTML = hrs;
  document.querySelector('#minutes').innerHTML = min;
  document.querySelector('#seconds').innerHTML = sec;
};

setInterval(displayTime, 10);