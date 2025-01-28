const date = new Date(document.lastModified);


const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

window.onload = function() {
    const temperature = 30; // Default temperature
    const weatherConditions = 'Clear'; // Default weather conditions
    const windSpeed = 8; // Default wind speed

    document.getElementById('temperature').innerText = temperature;
    document.getElementById('weatherConditions').innerText = weatherConditions;
    document.getElementById('windSpeed').innerText = windSpeed;

    let windChill = "N/A";

    if (temperature <= 50 && windSpeed > 3) {
        windChill = calculateWindChill(temperature, windSpeed, 'F').toFixed(2);
    }

    document.getElementById('windChill').innerText = `${windChill} °F`;
}

function calculateWindChill(temp, windSpeed, unit = 'F') {
    return unit === 'F' 
        ? 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16))
        : 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
}