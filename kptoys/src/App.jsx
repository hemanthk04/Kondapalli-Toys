import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Hero from "./components/layout/herosection";
import About from "./components/layout/about";
import History from "./components/layout/history";
import Footer from "./components/layout/footer";
import Maps from "./components/pages/Maps"; // Import the new Maps page
import Gallery from "./components/pages/gallery";
import Bar from "./components/layout/bar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About/>
              <History />
              <Bar></Bar>
            </>
          }
        />
        <Route path="/maps" element={<Maps />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer classname ="mt-12"/>
    </Router>
  );
}

export default App;
