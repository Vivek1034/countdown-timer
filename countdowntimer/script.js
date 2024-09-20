// Function to calculate the time remaining
function calculateTimeRemaining(endDate) {
    const now = new Date();
    const timeDifference = endDate - now;

    // Check if the date has already passed
    if (timeDifference <= 0) {
        return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        };
    }

    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return {
        days: days < 10 ? '0' + days : days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
    };
}

// Function to update the countdown timer display
function updateCountdown(endDate) {
    const timeRemaining = calculateTimeRemaining(endDate);

    document.getElementById('days').textContent = timeRemaining.days;
    document.getElementById('hours').textContent = timeRemaining.hours;
    document.getElementById('minutes').textContent = timeRemaining.minutes;
    document.getElementById('seconds').textContent = timeRemaining.seconds;

    // Update progress bar
    const totalTime = endDate - new Date(endDate.getFullYear(), 0, 1); // Start of the year
    const elapsedTime = new Date() - new Date(endDate.getFullYear(), 0, 1);
    const progress = Math.min(100, (elapsedTime / totalTime) * 100);
    document.getElementById('progress-bar').style.width = progress + '%';
}

// Event listener for date selection
document.getElementById('date-picker').addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    
    if (!isNaN(selectedDate)) {
        setInterval(() => updateCountdown(selectedDate), 1000);
    }
});
