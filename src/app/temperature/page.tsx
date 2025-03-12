'use client';

import '../styles/temperature.css';
import { useState } from 'react';

export default function CalculadoraTemperatura() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('Celsius');
    const [outputUnit, setOutputUnit] = useState('Fahrenheit');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        convertTemperature(value, inputUnit, outputUnit);
    };

    const handleInputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const unit = e.target.value;
        setInputUnit(unit);
        convertTemperature(inputValue, unit, outputUnit);
    };

    const handleOutputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const unit = e.target.value;
        setOutputUnit(unit);
        convertTemperature(inputValue, inputUnit, unit);
    };

    const convertTemperature = (value: string, fromUnit: string, toUnit: string) => {
        let converted = 0;
        const inputValue = parseFloat(value);

        if (fromUnit === 'Celsius') {
            if (toUnit === 'Fahrenheit') {
                converted = (inputValue * 9) / 5 + 32;
            } else if (toUnit === 'Kelvin') {
                converted = inputValue + 273.15;
            }
        } else if (fromUnit === 'Fahrenheit') {
            if (toUnit === 'Celsius') {
                converted = (inputValue - 32) * (5 / 9);
            } else if (toUnit === 'Kelvin') {
                converted = (inputValue - 32) * (5 / 9) + 273.15;
            }
        } else if (fromUnit === 'Kelvin') {
            if (toUnit === 'Celsius') {
                converted = inputValue - 273.15;
            } else if (toUnit === 'Fahrenheit') {
                converted = (inputValue - 273.15) * (9 / 5) + 32;
            }
        }

        setOutputValue(converted.toString());
    };

    return (
        <div className="modal-container">
            <div className="page-content-temperature">
                <h2 className="h2-temperature">Temperature Calculator</h2>
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="What is the temperature?"
                    className="input-field"
                />
                <div className="select-container">
                    <div>
                        <label className='label-temp'>From:</label>
                        <select value={inputUnit} onChange={handleInputUnitChange}>
                            <option value="Celsius">Celsius</option>
                            <option value="Fahrenheit">Fahrenheit</option>
                            <option value="Kelvin">Kelvin</option>
                        </select>
                    </div>
                    <div>
                        <label className='label-temp'>To:</label>
                        <select value={outputUnit} onChange={handleOutputUnitChange}>
                            <option value="Celsius">Celsius</option>
                            <option value="Fahrenheit">Fahrenheit</option>
                            <option value="Kelvin">Kelvin</option>
                        </select>
                    </div>
                </div>
                <div className="result-container">
                    <p>
                        Result: {outputValue} {outputUnit === "Celsius" && "°C"}
                        {outputUnit === "Fahrenheit" && "°F"}
                        {outputUnit === "Kelvin" && "°K"}
                    </p>
                </div>
            </div>
        </div>
    );
}
