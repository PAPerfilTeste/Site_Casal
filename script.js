const startDate = new Date("2023-10-18T00:01:00");
const timeElements = {
    years: document.getElementById("years"),
    months: document.getElementById("months"),
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
};

function updateCounter() {
    const now = new Date();
    let diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * 1000 * 60 * 60 * 24 * 365;

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * 1000 * 60 * 60 * 24 * 30;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;

    const seconds = Math.floor(diff / 1000);

    timeElements.years.innerHTML = `Anos: ${years}`;
    timeElements.months.innerHTML = `Meses: ${months}`;
    timeElements.days.innerHTML = `Dias: ${days}`;
    timeElements.hours.innerHTML = `Horas: ${hours}`;
    timeElements.minutes.innerHTML = `Minutos: ${minutes}`;
    timeElements.seconds.innerHTML = `Segundos: ${seconds}`;
}

setInterval(updateCounter, 1000);

// --->Algoritmo para o carrosel de fotos<---

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width;

// Define a posição inicial de cada slide
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

function moveToSlide(track, currentIndex) {
    track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(track, currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(track, currentIndex);
}

// Configuração para avançar automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);
