import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Evidence from "./pages/evidence";
import Focus from "./pages/focus";
import Influence from "./pages/influence";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/influence" element={<Influence />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
