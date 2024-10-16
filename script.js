$(document).ready(function () {
    function startCountdown(endDate) {
        let days, hours, minutes, seconds;
        endDate = new Date(endDate).getTime();

        if (isNaN(endDate)) return;

        setInterval(calculate, 1000);

        function calculate() {
            let startDate = new Date().getTime();
            let timeRemaining = parseInt((endDate - startDate) / 1000);

            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                timeRemaining = timeRemaining % 86400;

                hours = parseInt(timeRemaining / 3600);
                timeRemaining = timeRemaining % 3600;

                minutes = parseInt(timeRemaining / 60);
                seconds = parseInt(timeRemaining % 60);

                $("#days").text(days + "d ");
                $("#hours").text(hours + "h ");
                $("#minutes").text(minutes + "m ");
                $("#seconds").text(seconds + "s");
            }
        }
    }

    startCountdown("Dec 25, 2024 00:00:00");
});
