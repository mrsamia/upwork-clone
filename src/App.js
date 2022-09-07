import './App.css';

import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import YourNetwork from './Pages/YourNetwork';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/yourNetwork' element={ <YourNetwork />}/>
      </Routes>
    </div>
  );
}

export default App;
