import Fatura from '../components/fatura/Fatura';
import Sherbimet from '../components/sherbimet/Sherbimet';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 p-0">
            <Sherbimet />
          </div> 
          <div className="col-4">
            <Fatura />
          </div> 
        </div>
      </div>
      
    </div>
  );
}

export default App;
