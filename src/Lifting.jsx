import { useState } from 'react';

// Component hiển thị nước sôi
function BoilingVerdict({ celsius }) {
  return celsius >= 100 ? (
    <p>Water boils! 🔥</p>
  ) : (
    <p>Water does NOT boil. ❄️</p>
  );
}

// Component input nhiệt độ
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = { c: 'Celsius', f: 'Fahrenheit' };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

// Hàm chuyển đổi nhiệt độ
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Component cha quản lý state
function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  // Xử lý thay đổi nhiệt độ
  const handleCelsiusChange = (value) => {
    setTemperature(value);
    setScale('c');
  };

  const handleFahrenheitChange = (value) => {
    setTemperature(value);
    setScale('f');
  };

  // Tính toán nhiệt độ hiển thị
  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius) || 0} />
    </div>
  );
}

export default Calculator;