import logo from "./logo.png";
import DictionaryForm from "./DictionaryForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo img-fluid" alt="dictionary icon" />
        <p>What word do you want to look up? </p>
      </header>
      <DictionaryForm/>
      <footer>
        <a
          href="https://github.com/yccjs/react-dictionary-app"
          target="_blank"
          className="githublink"
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
