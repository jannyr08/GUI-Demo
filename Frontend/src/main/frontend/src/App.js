import './App.css';
import axios from 'axios';
import TeamName from './components/TeamName';

function App() {

    const handleMessage = async () => {
        const message = {
            "input":[
                {"value": document.getElementById("letterInput1").value},
                {"value": document.getElementById("letterInput2").value},
                {"value": document.getElementById("numberInput1").value},
                {"value": document.getElementById("numberInput2").value},
            ]
        }
        const response = await axios.post('https://reqres.in/api/articles', message);
        console.log(response);
        let output = "Output: ";
        for (let i = 0; i < response.data.input.length; i++)
        {
            output = output + response.data.input[i].value;
        }
        document.getElementById("getRequestOutput").value = output;
    }

  return (
    <div className="App">

        {/* <TeamName /> */} 

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
          <button onClick={handleMessage} id={"postButton"}>Submit Team Name</button>
        <br/>
        <textarea id={"getRequestOutput"}>Nothing here to show!</textarea>

    </div>
  );
}

export default App;
