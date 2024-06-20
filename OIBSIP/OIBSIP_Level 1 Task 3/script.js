function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(inputTemp)) {
        alert('Please enter a valid number');
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (inputUnit === 'C') {
        celsius = inputTemp;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (inputUnit === 'F') {
        fahrenheit = inputTemp;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (inputUnit === 'K') {
        kelvin = inputTemp;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById('celsiusResult').innerText = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById('fahrenheitResult').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('kelvinResult').innerText = `Kelvin: ${kelvin.toFixed(2)}K`;
}