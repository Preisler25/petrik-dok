import logo from './logo.svg';
import './App.css';
import generalBtn from './comp/btn';
import generalTxt from './comp/textBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {generalTxt("header", "lorem")}
          {generalTxt("header", "lorem")}
          {generalTxt("header", "lorem")}
          {generalBtn("Jelentkezem", console.log("alma"))}
        </div>
      </header>
    </div>
  );
}

export default App;
