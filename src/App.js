import Header from "./Header";
import TodaysWeather from "./TodaysWeather";

import './App.css';

function App() {
  return (
    <div className="App">
      <main className="container">
        <Header />
        <TodaysWeather />
      </main>
      <footer>
        <span>
          <a href="https://github.com/MelanieMayne/weather-react-app" target="_blank" rel="noreferrer">Open-Source Code</a> by Melanie Richardson
        </span>
      </footer>
    </div>
  );
}

export default App;
