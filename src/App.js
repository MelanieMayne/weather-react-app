import SearchEngine from "./SearchEngine";
import image from "./images/galaxy2.jpeg";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat"
        }}
        class="container main-container"
      >
        <SearchEngine city="Long Beach"/>
      </div>
      <footer>
        <p>This project was coded by <a href="https://cosmic-daffodil-494003.netlify.app/" target="_blank" rel="noreferrer">Melanie Richardson</a> and is <a href="https://github.com/MelanieMayne/My-Portfolio-Project" target="_blank" rel="noreferrer">open-sourced on GitHub</a> and <a href="https://app.netlify.com/sites/cosmic-daffodil-494003/overview" target="_blank" rel="noreferrer">hosted on Netlify</a></p>
      </footer>
    </div>
  );
}
