



const startDate = new Date("2025-03-03T00:00:00");
const timeDisplay = document.getElementById("time");
const timeOption = document.getElementById("time-option");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    switch (timeOption.value) {
        case "days":
            timeDisplay.textContent = `${days} дней`;
            break;
        case "hours":
            timeDisplay.textContent = `${hours} часов`;
            break;
        case "minutes":
            timeDisplay.textContent = `${minutes} минут`;
            break;
        case "seconds":
            timeDisplay.textContent = `${seconds} секунд`;
            break;
    }
}

timeOption.addEventListener("change", updateCounter);
setInterval(updateCounter, 1000);
updateCounter();
