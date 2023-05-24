const timeElement = document.getElementById("time");
const alarmElement = document.getElementById("alarm");
const setAlarmBtn = document.getElementById("setAlarmBtn");

// Update current time
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeElement.innerHTML = timeString;
  setTimeout(updateTime, 1000); // Update every second
}

// Set alarm
function setAlarm() {
  const alarmTime = prompt("Enter alarm time (HH:MM AM/PM):");

  if (alarmTime) {
    alarmElement.innerHTML = `Alarm has been set for ${alarmTime}`;
    checkAlarm(alarmTime);
  }
}

// Check if it's time for the alarm
function checkAlarm(alarmTime) {
  const now = new Date();
  const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (currentTime == alarmTime) {
    window.alert("Wake up!");
    alarmElement.innerHTML = "";
  }

  setTimeout(checkAlarm, 1000, alarmTime); // Check every second
}

// Event listener for the "Set Alarm" button
setAlarmBtn.addEventListener("click", setAlarm);

// Start updating time
updateTime();
