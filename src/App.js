import './App.css';
import Sidebar from './components/Sidebar'
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      {/* <h1>This is COLAB</h1> */}
      <Sidebar className="sidebar" />
      <Body className="body"/>
    </div>
  );
}

export default App;
