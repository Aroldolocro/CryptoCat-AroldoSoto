import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to CryptoCat 
        </p>
        <a
          className="App-link"
          href="https://coinmarketcap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See crypto prycing hola
        </a>
      </header>
    </div>
  );
}

export default App;
