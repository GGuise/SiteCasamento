// Contador regressivo
/*
const weddingDate = new Date("October 24, 2026 16:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
    }
}, 1000);
*/

const weddingDate = new Date("October 24, 2026 16:00:00").getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("months").innerHTML = "0";
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        return;
    }

    const nowDate = new Date();
    const futureDate = new Date(weddingDate);

    // Calcula a diferença em meses entre as datas
    let months = (futureDate.getFullYear() - nowDate.getFullYear()) * 12;
    months += futureDate.getMonth() - nowDate.getMonth();

    // Ajuste se o dia atual for maior que o dia do futuro
    if (futureDate.getDate() < nowDate.getDate()) {
        months--;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);
