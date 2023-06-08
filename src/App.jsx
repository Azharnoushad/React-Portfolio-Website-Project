import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import NavBar from "./Components/NavBar";
import OurWorks from "./Pages/OurWorks";
import ContactUs from "./Pages/ConatctUs";
import { Routes, Route,useLocation } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./Components/ScrollTop";

function App() {
  const location =useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop/>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWorks />} />
          <Route path="/work/:id" element={<MovieDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
