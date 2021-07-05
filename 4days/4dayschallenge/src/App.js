import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import NameInput from './components/NameInput/NameInput';
import ColorInput from './components/ColorInput/ColorInput';
import Result from './components/Result/Result';

function App() {
  return (
    <div className="App">
      <FrontPage />
      <NameInput />
      <ColorInput />
      <Result />
    </div>
  );
}

export default App;
