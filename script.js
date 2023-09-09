const today = document.querySelector("[data-testid='currentDayOfTheWeek']");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "friday", "Saturday"]

const time = document.querySelector("[data-testid='currentUTCTime']");


// current utc time in ms
function updateTime() {
    const currentTime = new Date().getTime();
    time.innerHTML = `${currentTime}ms`;
}

setInterval(updateTime, 1000);

const currentDayOfTheWeek = new Date().getDay();

today.innerHTML = days[currentDayOfTheWeek]