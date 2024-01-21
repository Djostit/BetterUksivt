import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

const App = () => {
  return(
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer/>
    </div>
  );
}
 
export default App;
