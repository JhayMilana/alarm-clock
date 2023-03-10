'use strict';

const set = document.querySelector('.set');
const output = document.querySelector('.output p');
const input = document.querySelector('.time');
const shake = document.querySelector('.shake');
const alarmSound = new Audio('./assets/audio/alarm-sound.mp3');
alarmSound.type = 'audio/mp3';

function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours().toString().padStart(2, 0);
  let min = dateTime.getMinutes().toString().padStart(2, 0);
  let sec = dateTime.getSeconds().toString().padStart(2, 0);

  document.querySelector('#hours').innerHTML = hrs;
  document.querySelector('#minutes').innerHTML = min;
  document.querySelector('#seconds').innerHTML= sec;
};

setInterval(displayTime, 10);

function isTime(a) {
  if (a.length > 0 && a.length <= 5 ) {
    return true;
  }
  return false;
}

set.addEventListener('click', function() {
  let a = input.value.trim();

  if (isTime(a)) {
    output.innerText = `${a}`;
    input.value = '';
  } else {
    output.innerText = 'Please, enter valid a valid time.';
  }
});

function alarm() {
  if (output.innerText = `${hrs}:${min}`) {
    
  }
}