window.addEventListener('DOMContentLoaded', () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = new Date().getUTCDay()
    const time = new Date().getTime()
    document.getElementById("currentDayOfTheWeek").textContent = days[day]
    document.getElementById("currentUTCTime").textContent = time;

})
