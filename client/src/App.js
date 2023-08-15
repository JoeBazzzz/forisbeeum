import './App.css';
import Header from './ui/components/Header'
import Login from './ui/components/Login'
import Dropdown from './ui/components/Dropdown'
import Footer from './ui/components/Footer'
import Body from './ui/components/Body'
import Home from './ui/Pages/Home'
import Profile from './ui/Pages/Profile';
import { useState } from 'react';

function App() {

  const [page, setpage] = useState('home')
  var content;
  switch (page) {
    case 'home':
      content = <Home/>
      break;
    case 'profile':
      content = <Profile/>
  }

  console.log(page);
  return (
    <div className="App">
      <header className="App-header">
        <Header setPage={setpage}/>
        {content}
      </header>
      
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
