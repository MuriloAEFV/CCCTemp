import "./Home.css";

export default function Home() {
  const items = [
    "Temperature scale calculator in Celsius, Fahrenheit, or Kelvin",
  "Time converter (hour/minute/second)",
  "Stopwatch",
  ];

  return (
    <div className="container">
      <h1 className="h1-page">Welcome in CCCTemp! <br/> Here you find</h1>
      <ul className="ul-page">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
