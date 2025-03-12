'use client';

import '../styles/stopwatch.css';
import { useState, useEffect } from 'react';

export default function Cronometro() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        let timeString = `${seconds} second(s)`;
        if (minutes > 0 || hours > 0) {
            timeString = `${minutes} minute(s) ` + timeString;
        }
        if (hours > 0) {
            timeString = `${hours} hour(s) ` + timeString;
        }

        return timeString;
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            if (interval) {
                clearInterval(interval);
            }
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [running]);

    const handleStartStop = () => setRunning(!running);
    const handleReset = () => setTime(0);

    return (
        <div className="modal-container">
            <div className="content-container">
                <h2 className='h2-stopwatch'>Stopwatch</h2>
                <p className="time-display">{formatTime(time)}</p>
                <div className="button-container">
                    <button onClick={handleStartStop}>
                        {running ? 'Stop' : 'Start'}
                    </button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
}
