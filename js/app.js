setInterval(setClock, 1000)

const heureHand = document.querySelector('[data-heures]');
const minuteHand = document.querySelector('[data-minutes]');
const secondeHand = document.querySelector('[data-secondes]');

function setClock() {
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const minutes = (seconds + date.getMinutes())/60;
    const heures = (minutes + date.getHours()/12);

    setRotation(secondeHand,seconds)
    setRotation(minuteHand,minutes)
    setRotation(heureHand,heures)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock();