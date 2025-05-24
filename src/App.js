import {BrowserRouter, Routes,Route} from "react-router-dom"
import FAQs from "./components/FAQs"
import Contactus from "./components/Contactus"
import Service from "./components/Service";
import About from "./components/About";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.css"

const App=()=>{
  return (<BrowserRouter>
  
   <Header/>
   <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/services" element={<Service/>}/>
  <Route path="/contact" element={<Contactus/>}/>
  <Route path="/faq" element={<FAQs/>}/>
  </Routes>
  <Footer/>
  
  </BrowserRouter>)
  
}
export default App