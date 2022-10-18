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
    </div>
  );
}

export default App;
