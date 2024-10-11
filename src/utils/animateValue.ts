function animateValue(id: string, start: number, end: number, duration: number): void {
    const obj = document.getElementById(id) as HTMLElement;
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));

    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    let timer: NodeJS.Timeout;

    function run(): void {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = Math.round(end - (remaining * range));
        obj.innerHTML = value + '+';
        if (value === end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}

window.onload = (): void => {
    animateValue("years", 0, 12, 2000);
    animateValue("clients", 0, 360, 2000);
    animateValue("projects", 0, 580, 2000);
    animateValue("advisors", 0, 160, 2000);
    animateValue("sales", 0, 48, 2000);
};
