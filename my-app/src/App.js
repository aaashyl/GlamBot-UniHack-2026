import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Hello Ashyl 👋</h1>
      <p>My first React app is running!</p>

      <button onClick={() => alert("React works!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;

