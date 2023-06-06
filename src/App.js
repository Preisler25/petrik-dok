import './App.css';
import generalBtn from './comp/btn';
import generalTxt from './comp/textBox'
import generalNav from './elements/navBar';

function App() {
  return (
    <div className="App">
      <header>
        {generalNav()}
      </header>
      <body>
      <div className='App-body'>
          {generalTxt("header", "lorem")}
          {generalTxt("header", "lorem")}
          {generalTxt("header", "lorem")}
          {generalBtn("Jelentkezem", console.log("alma"))}
        </div>
      </body>
    </div>
  );
}

export default App;
