const today = document.getElementById('currentDayOfTheWeek')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"]

const time = document.getElementById('currentUTCTime')

time.innerHTML = `${new Date().getTime() * 1000}ms`




const currentDayOfTheWeek = new Date().getDay();


const slackUserName = window.localStorage.getItem("slackUserName");
const githubURL = window.localStorage.getItem("githubURL");


today.innerHTML = days[currentDayOfTheWeek]


// displayTime();

function displayTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Display the time in the format "hh:mm:ss"
    document.getElementById("currentUTCTime").innerHTML = `${hours}:${minutes}:${seconds}`;

    // Set a new timeout to call this function again in 1 second
    setTimeout(displayTime, 1000);
}
