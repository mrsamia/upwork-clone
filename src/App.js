import './App.css';
import Nav from './Components/Nav/Nav';
import StartNetworking from './Pages/StartNetworking';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container main">
        <StartNetworking />
      </div>
    </div>
  );
}

export default App;
