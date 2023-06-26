import logo from './logo.svg';
import './App.css';
import Dispositivo from './components/Device';
import TransmisionView from './views/TransmitionView';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <TransmisionView/>
    </div>
  );
}

export default App;
