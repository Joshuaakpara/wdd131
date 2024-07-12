// script.js

document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedSpan = document.getElementById('lastModified');
    const yearSpan = document.getElementById('year');
    const windChillSpan = document.getElementById('windchill');

    const lastModified = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModified.toLocaleDateString();

    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    const temperature = 19; // °C
    const windSpeed = 5; // km/h

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillSpan.textContent = `${windChill} °C`;
    } else {
        windChillSpan.textContent = 'N/A';
    }
});

function calculateWindChill(temp, wind) {
    return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16));
}
