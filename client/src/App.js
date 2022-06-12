
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>User information</h1>      
    
    <div className="Form">
      <input type="text" name="strName" placeholder="Student name"></input>
      <input type="date" name="dtmDOB" placeholder="date of birth"></input>
      <input type="email" name="strEmail" placeholder="email"></input>
      <input type="password" name="strPassword" placeholder="password"></input>
      <button> submit</button>

    </div>
    </div>
  );
}

export default App;
