'use client';

import '../styles/time.css';
import { useState } from 'react';

export default function ConversorTempo() {
    const [inputTime, setInputTime] = useState('');
    const [inputUnit, setInputUnit] = useState('seconds');
    const [outputUnit, setOutputUnit] = useState('minutes');
    const [convertedTime, setConvertedTime] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTime(e.target.value);
    };

    const handleInputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setInputUnit(e.target.value);
    };

    const handleOutputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOutputUnit(e.target.value);
    };

    const convertTime = () => {
        let timeInSeconds: number = 0;
        if (inputUnit === 'seconds') {
            timeInSeconds = parseFloat(inputTime);
        } else if (inputUnit === 'minutes') {
            timeInSeconds = parseFloat(inputTime) * 60;
        } else if (inputUnit === 'hours') {
            timeInSeconds = parseFloat(inputTime) * 3600;
        }

        let converted: string = '';
        if (outputUnit === 'seconds') {
            converted = `${timeInSeconds} segundos`;
        } else if (outputUnit === 'minutes') {
            converted = `${timeInSeconds / 60} minutos`;
        } else if (outputUnit === 'hours') {
            converted = `${timeInSeconds / 3600} horas`;
        }

        setConvertedTime(converted);
    };

    return (
        <div className="modal-container">
            <div className="time-content-container">
                <h2 className='h2-time'>Time Converter</h2>

                <input
                    type="number"
                    value={inputTime}
                    onChange={handleInputChange}
                    placeholder="Enter the time"
                    className="border p-2 mt-2"
                />

                <div className="select-container">
                    <div>
                        <label className='label-time'>From:</label>
                        <select value={inputUnit} onChange={handleInputUnitChange}>
                            <option value="seconds">Seconds</option>
                            <option value="minutes">Minutes</option>
                            <option value="hours">Hours</option>
                        </select>
                    </div>

                    <div>
                        <label className='label-time'>To:</label>
                        <select value={outputUnit} onChange={handleOutputUnitChange}>
                            <option value="seconds">Seconds</option>
                            <option value="minutes">Minutes</option>
                            <option value="hours">Hours</option>
                        </select>
                    </div>
                </div>

                <button onClick={convertTime}>Convert</button>

                <div className="result-container">{convertedTime}</div>
            </div>
        </div>
    );
}
