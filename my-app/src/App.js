import './App.css';
import Header from './components/Header'
import Page from './components/Page'
import HomePage from './components/HomePage';
import TemperatureContainer from './components/Content/temperatureContainer';

function App() {
  return (
    <div>
      <Header/>
        <TemperatureContainer />
      <HomePage/>
    </div>
  )
}

export default App;
