import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import BtnScroll from "./components/btnScroll/BtnScroll";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        {[
          { path: "/", component: <Home /> },
          { path: "*", component: <NotFound /> },
          { path: "/about", component: <About /> },
          { path: "/products", component: <Products /> },
          { path: "/signin", component: <SignIn /> },
        ].map((x) => (
          <Route path={x.path} element={x.component} />
        ))}
      </Routes>
      <Footer />
      <BtnScroll />
    </div>
  );
};

export default App;
