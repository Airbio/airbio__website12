import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductPage from "./components/products/ProductPage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Home/Header";
import Footer from "./components/Footer/Footer";
import AllProductPage from "./components/Allproductpage/AllProductPage";
import DiscoverProducts from "./components/products/DiscoverProducts";
import BlogPage from "./components/Blog/BlogPage";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./components/Blog/Blog";
import Blog2 from "./components/Blog/Blog2";
import Blog3 from "./components/Blog/Blog3";
import FumeHoods from "./components/Allproductpage/FumeHoods";
import LaminarFlow from "./components/Allproductpage/LaminarFlow";
import A2Agies from "./components/products/A2Agies";
import BSCA2 from "./components/products/BSCA2";
import MainA2 from "./components/products/MainA2";
import Airflow from "./components/products/Airflow";
import AirflowVelocity from "./components/products/AirflowVelocity";
import BAgies from "./components/products/BAgies";
import AirFumeHood from "./components/products/AirFumeHood";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import FAQ from "./components/FAQ/FAQ";
import PCRworkstation from "./components/Allproductpage/PCRworkstation";
import GeneSafe from "./components/products/GeneSafe";
import PassBox from "./components/Allproductpage/PassBox";
import StaticPassBox from "./components/products/StaticPassBox";
import DynamicPassBox from "./components/products/DynamicPassBox";
import AirShower from "./components/products/AirShower";
import AirShowers from "./components/Allproductpage/AirShowers";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<DiscoverProducts />} />
        <Route path="/product/Biosafety" element={<AllProductPage />} />
        <Route path="/product/FumeHoods" element={<FumeHoods />} />
        <Route path="/product/laminar" element={<LaminarFlow />} />
        <Route path="/product/PCRworkstation" element={<PCRworkstation />} />
        <Route path="/product/PassBox" element={<PassBox />} />
        <Route path="/product/AirShowers" element={<AirShowers />} />

        {/* Biosafety */}
        <Route
          path="/product/Biosafety/BscClassIIB2"
          element={<ProductPage />}
        />
        <Route
          path="/product/Biosafety/BscClassIIB2(Agies)"
          element={<BAgies />}
        />
        <Route
          path="/product/Biosafety/BscClassIIA2(Agies)"
          element={<A2Agies />}
        />
        <Route path="/product/Biosafety/BscClassIIA2" element={<BSCA2 />} />
        <Route
          path="/product/Biosafety/BscMainClassIIA2"
          element={<MainA2 />}
        />

        {/* Fume Hood */}
        <Route path="/product/FumeHoods/FumeHood" element={<AirFumeHood />} />

        {/* Laminar */}
        <Route path="/product/laminar/Airflow" element={<Airflow />} />
        <Route
          path="/product/laminar/Airflow(Velocity)"
          element={<AirflowVelocity />}
        />

        {/* PCR */}
        <Route path="/product/PCRworkstation/GeneSafe" element={<GeneSafe />} />

        {/* Pass Box */}
        <Route
          path="/product/PassBox/StaticPassBox"
          element={<StaticPassBox />}
        />
        <Route
          path="/product/PassBox/DynamicPassBox"
          element={<DynamicPassBox />}
        />

        {/* Air Shower */}
        <Route path="/product/AirShowers/airshower" element={<AirShower />} />

        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/blog1" element={<Blog />} />
        <Route path="/blog/blog2" element={<Blog2 />} />
        <Route path="/blog/blog3" element={<Blog3 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
