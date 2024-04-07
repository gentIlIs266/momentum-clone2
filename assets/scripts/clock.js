function realTimeClock () {
    const clock = document.querySelector("#clock");
    const presentDate = new Date();
    const presentHours = String(presentDate.getHours()).padStart(2, "0");
    const presentMinutes = String(presentDate.getMinutes()).padStart(2, "0");
    clock.textContent = `${presentHours}:${presentMinutes}`;
} realTimeClock()
  setInterval(realTimeClock, 1000);