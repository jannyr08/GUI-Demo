import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>GUI and Engine Test App </h1>
        <label>Letter Input 1 </label>
        <input id={"letterInput1"}/>
        <br/>
        <label>Letter Input 2 </label>
        <input id={"letterInput2"}/>
        <br/>
        <label>Number Input 1</label>
        <input id={"numberInput1"}/>
        <br/>
        <label>Number Input 2</label>
        <input id={"numberInput2"}/>
        <br/>
          <button id={"postButton"}>Submit Team Name</button>
        <br/>
        <textarea id={"getRequestOutput"}>Nothing here to show!</textarea>
    </div>
  );
}

export default App;
