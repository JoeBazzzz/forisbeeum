import './App.css';
import Header from './ui/components/Header'
import Login from './ui/components/Login'
import Dropdown from './ui/components/Dropdown'
import Footer from './ui/components/Footer'

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <br></br>
     <div className="grid">
        <Login/>
        <br></br>
        <Dropdown/>
      </div>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
