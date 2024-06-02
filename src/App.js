import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import IndexRoute from './routes/index';

function App() {

  return (
    <div className="App">
      {/* <AllUsers /> */}
      <BrowserRouter>
        <IndexRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;

