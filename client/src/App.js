import './App.css';
import Header from './ui/components/Header'
import Login from './ui/components/Login'
import Dropdown from './ui/components/Dropdown'
import Footer from './ui/components/Footer'
import Body from './ui/components/Body'

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      
     <div className="grid">
        <Login/>
        <Body/>
        <Dropdown/>
      </div>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
