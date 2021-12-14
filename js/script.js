var timeElem = document.getElementById('time'), 
		countdown = new Date(),
		responseTime = new Date(Date.now() + (1000*300)); // таймер 10 секунд

function startTime() {
  countdown.setTime(responseTime - Date.now());
  timeElem.innerHTML = countdown.getUTCMinutes() + ':' + countdown.getUTCSeconds() + ':' + countdown.getUTCMilliseconds();
  if(countdown.getUTCHours() > 0 || countdown.getUTCMinutes() > 0 || countdown.getUTCSeconds() > 0) 
  requestAnimationFrame(startTime);

}
requestAnimationFrame(startTime);