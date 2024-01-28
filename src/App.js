import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />

        <footer>
          This project was coded by Andreia Fernandes and is
          <a
            href="https://github.com/andie7/New-React-weather-app"
            target="_blank"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
