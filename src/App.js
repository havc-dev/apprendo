import './App.css';
import Navbar from './components/Navbar';
import AnkyHome from './components/AnkyHome';
import FeynmanHome from './components/FeynmanHome';

function App() {
  return (
    <div className="App">
      <h1>
        Base React File - Anki Apprendemos
        <Navbar />
        <AnkyHome />
        <FeynmanHome />
      </h1>
    </div>
  );
}

export default App;
