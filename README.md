# circle-progress

https://nardo88.github.io/circle-progress/

### HTML

```html
<div class="progress__wrapper">
    <svg class="progress-ring" width="120" height="120">
        <!-- Радиус считается r = (widhth / 2 ) - (stroke-width * 2) -->
        <circle class="progress-ring__circle" stroke="#fff" stroke-width="4" cx="60" cy="60" r="52" fill="transparent" />
    </svg>
    <span class="value">0</span>
</div>
```


### CSS

```css
html, body{
    background-color: skyblue;
    height: 5200px;

}

* {
    margin: 0;
    padding: 0;

}

.progress-ring__circle{
    /* Это свойство может разбить обвотку круга на участки по 10 пикселей между которыми будет 20 пикселей растояния */
    /* stroke-dasharray: 10 20; */

    /* это свойство может вставить в нашу окружность бреш и длина этой бреши может задаваться в процентах */
    /* stroke-dashoffset: 30; */


    transform-origin: center;
    transform: rotate(-90deg);
    transition: .3s;
}

.progress__wrapper{
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.value{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    font-family: sans-serif;
    font-size: 35px;
    line-height: 1;
}
```


### JavaScript

```JavaScript

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
```