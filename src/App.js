import logo from './logo.svg';
import './App.css';

function ShowName(){
  let user = {name: "alma"}
  return(
  <h1>
  {user.name}
</h1>)
}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <ShowName />
      </header>
    </div>
  );
}

export default App;
