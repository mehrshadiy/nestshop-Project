export const timerHelper = (end: string | null) => {
    // const endDate = new Date(end).getTime();
    const endDate = end !== null ? new Date(end).getTime() : new Date().getTime();
    const currentDate = (new Date).getTime();

    const timeRemaining = endDate - currentDate;

    const timeObj = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (timeRemaining > 0) {
        timeObj.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        timeObj.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        timeObj.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        timeObj.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    }
    return timeObj;
}