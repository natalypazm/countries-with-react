import logo from './logo.svg';
import './App.css';
import Country from './country';

function App() {
  return (
    <div className="App">
      <Country 
      flag="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/300px-Flag_of_Peru.svg.png"
      name="Perú"
      population="{111}"
      region="América"
      capital ="Lima" />
    </div>
  );
}

export default App;
