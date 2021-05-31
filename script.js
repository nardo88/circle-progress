
// получили сам круг
const circle = document.querySelector('.progress-ring__circle');
const value = document.querySelector('.value');
// получили радиус круга
const radius = circle.r.baseVal.value;
// получаем длинку круга
const circleLength = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circleLength} ${circleLength}`;
circle.style.strokeDashoffset = circleLength;

function progress(persent) {
    const offSet = circleLength - persent / 100 * circleLength;
    circle.style.strokeDashoffset = offSet;
}

window.addEventListener('scroll', () => {
    let max = document.body.offsetHeight - innerHeight ;
    const percent = Math.floor(window.pageYOffset / max * 100);
    value.textContent = `${percent}`;
    progress(percent);

})