document.addEventListener("DOMContentLoaded", () => {
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified.toLocaleDateString()}`;

    const temperature = 15; // Static value for temperature in °C
    const windSpeed = 10;   // Static value for wind speed in km/h

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
        } else {
            return "N/A";
        }
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = `Windchill: ${windChill}`;
});
