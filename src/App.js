import logo from './logo.svg';
import './App.css';
import generalBtn from './comp/btn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        {generalBtn("Jelentkezem", console.log("alma"))}
        </div>
      </header>
    </div>
  );
}

export default App;
