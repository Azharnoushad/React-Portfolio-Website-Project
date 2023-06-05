import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import NavBar from "./Components/NavBar";
import OurWorks from "./Pages/OurWorks";
import ContactUs from "./Pages/ConatctUs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes>
       <Route path="/" element={<AboutUs/>}/>
       <Route path="/work" element={<OurWorks/>}/>
       <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
