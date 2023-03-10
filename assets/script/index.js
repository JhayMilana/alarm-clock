'use strict';

const set = document.querySelector('.set');
const output = document.querySelector('.output p');
const input = document.querySelector('.time');
const shake = document.querySelector('.shake');
const icon = document.querySelector('.fa-bell');
const alarmSound = new Audio('./assets/audio/alarm-sound.mp3');
alarmSound.type = 'audio/mp3';
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours().toString().padStart(2, 0);
  let min = dateTime.getMinutes().toString().padStart(2, 0);
  let sec = dateTime.getSeconds().toString().padStart(2, 0);

  hours.innerHTML = hrs;
  minutes.innerHTML = min;
  seconds.innerHTML= sec;
};

setInterval(displayTime, 10);

function isTime(a) {
  if (a.length > 0 && a.length <= 5 ) {
    return true;
  }
  return false;
}

set.addEventListener('click', () => {
  let a = input.value.trim();

  if (isTime(a)) {
    output.innerText = `${a}`;
    input.value = '';
  } else {
    output.innerText = 'Please, enter valid a valid time.';
  }

  if (output.innerText === `${hours.innerText}:${minutes.innerText}`) {
    icon.classList.add('shake');
    alarmSound.play();
  }
});
/*
set.addEventListener('click', () => {
  if (output.innerText = `${hours.innerText}:${minutes.innerText}`) {
    icon.classList.add('shake');
    alarmSound.play();
  }
});
*/