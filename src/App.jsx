import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <AboutUs />
    </div>
  );
}

export default App;
