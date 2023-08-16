import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { useState } from 'react';
import ContactUsModal from './components/ContactUsModal';
function App() {

  const [isOpenContactModal , setIsOpenContactModal] = useState(false)

  return (
    <div className="App">
      {isOpenContactModal? <ContactUsModal setIsOpen={setIsOpenContactModal}/> : <></>}
      <div style={{backgroundColor:"rgba(43, 44, 64, 0.96)" , width:'100%' , display:'flex' , justifyContent:'center' , boxShadow: '0 0.125rem 0.375rem rgba(0, 0, 0, 0.25)'}}>
        <NavBar setIsOpen={setIsOpenContactModal}/>
      </div>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
