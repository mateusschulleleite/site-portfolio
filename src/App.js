import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Languages from "./components/Languages";
import Portfólio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Languages />
      <Portfólio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
