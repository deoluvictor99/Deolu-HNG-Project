const today = document.getElementById('currentDayOfTheWeek')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"]

const time = document.getElementById('currentUTCTime')


// current utc time in ms
time.innerHTML = `${new Date().getTime() * 1000}ms`

const currentDayOfTheWeek = new Date().getDay();
const githubURL = window.localStorage.getItem("githubURL");


today.innerHTML = days[currentDayOfTheWeek];
