import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
// import NavBar from "./layout/Navbar";
import Footer from "./layout/Footer";
function App() {
  return (
   <Router>
    {/* <NavBar/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
