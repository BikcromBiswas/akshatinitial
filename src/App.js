import Header from "./Header";
import Nav from "./Nav";
import Mcontent from "./Mcontent";
import Footer from "./Footer";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Stats from "./Stats";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path="/stats" element={<Stats/>}/>
        </Routes>

     
        
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
