'use client';
import '../styles/Navbar.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/temperature">Temperature Calculator</Link>
                </li>
                <li>
                    <Link href="/time">Time converter</Link>
                </li>
                <li>
                    <Link href="/stopwatch">Stopwatch</Link>
                </li>
            </ul>
        </nav>
    );
}
