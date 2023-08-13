import './App.css';
import NavBar from "./components/NavBar";
import SideMenuHorizontal from "./components/SideMenuHorizontal";
function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:"rgba(43, 44, 64, 0.96)" , width:'100%' , display:'flex' , justifyContent:'center' , boxShadow: '0 0.125rem 0.375rem rgba(0, 0, 0, 0.25)'}}>
        <NavBar/>
      </div>
      {/*<hr/>*/}
      {/*<SideMenuHorizontal/>*/}
    </div>
  );
}

export default App;
