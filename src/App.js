import './App.css';
import NavBar from "./components/NavBar";
import SideMenuHorizontal from "./components/SideMenuHorizontal";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:"rgba(43, 44, 64, 0.96)" , width:'100%' , display:'flex' , justifyContent:'center' , boxShadow: '0 0.125rem 0.375rem rgba(0, 0, 0, 0.25)'}}>
        <NavBar/>
      </div>
      <MainContent/>
      {/*<hr/>*/}
      {/*<SideMenuHorizontal/>*/}
      <Footer/>
    </div>
  );
}

export default App;
