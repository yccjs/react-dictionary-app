import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="dictionary icon" />
        <p>Welcome to my app! </p>
      </header>
      <footer>
        <a
          href="https://github.com/yccjs/react-dictionary-app"
          target="_blank"
          class="githublink"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Yushiko Cloe Salvador
      </footer>
    </div>
  );
}

export default App;
