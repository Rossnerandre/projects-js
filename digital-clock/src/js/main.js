var alarm;
var now;
confirmAlarm = true;
function clockTime() {
  var date = new Date();
  now = date;
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hour >= 12 ? 'PM' : 'AM';
  let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let fullDate = dayNames[dayNumber] + ' : ' + (hour < 10 ? `0${hour}` : hour) +
    ' : ' + (minutes < 10 ? `0${minutes}` : minutes) + ' : ' + ampm;

  document.querySelector('.clock').textContent = fullDate

  setTimeout(clockTime, 200);

  if (alarm <= date && confirmAlarm) {
    alarmWarning()
  }
}

const alarmWarning = () => {
  document.getElementById('audio').play();
  document.querySelector('.modal').style.display = 'flex';
}

const disableAlarm = () => {
  confirmAlarm = false
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('.alarm-time').textContent = ''
}

window.addEventListener('load', clockTime);

const openAlarm = () => {
  document.querySelector('.set-alarm').style.display = 'block'
}

const closeAlarm = () => {
  document.querySelector('.set-alarm').style.display = 'none'
}

const setAlarm = () => {
  const min = document.getElementById('mins')
  const hour = document.getElementById('hours')
  alarm = new Date();
  if (hour.value <= alarm.getHours()) {
    if (min.value <= alarm.getMinutes()) {
      alarm.setDate(alarm.getDate() + 1)
    }
  }

  alarm.setHours(hour.value);
  alarm.setMinutes(min.value);
  alarm.setSeconds(00);

  let dayNumber = alarm.getDay();
  let hours = alarm.getHours();
  let minutes = alarm.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let fullDate = dayNames[dayNumber] + ' : ' + (hours < 10 ? `0${hours}` : hours) +
    ' : ' + (minutes < 10 ? `0${minutes}` : minutes) + ' : ' + ampm;

  document.querySelector('.alarm-time').textContent = fullDate;

  let button = document.createElement('button');
  button.textContent = 'X'
  button.className = 'btn-close'
  button.setAttribute('onclick', 'disableAlarm()');

  document.querySelector('.alarm-time').appendChild(button);

  confirmAlarm = true;
  closeAlarm();
}

const hours = document.getElementById('hour');
for (let i = 0; i < 24; i++) {

  const option = document.createElement('option')
  option.value = i < 10 ? `0${i}` : i;
  option.innerHTML = i < 10 ? `0${i}` : i;
  hours.appendChild(option)
}
const min = document.getElementById('min');
for (let i = 0; i < 60; i++) {

  const option = document.createElement('option')
  option.value = i < 10 ? `0${i}` : i;
  option.innerHTML = i < 10 ? `0${i}` : i;
  min.appendChild(option)
}
