// import logo from "./logo.svg";
import "./App.css";
import "./css_file/bootstrap.css";
import "./css_file/grid.css";
// import Home from "./Components/Home";
// import About from "./Components/About";
import "./Components/Home.css";
import "./Components/Payment.css";
 import Details from "./Components/Details";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";
import RazorpayButton from "./Components/RazorpayButton";
import Done from "./Components/Done";
import { BrowserRouter, Routes , Route} from "react-router-dom";


function App() {
  return (
 <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/details" element={<Details/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/shop" element={<Shop/>}/>
  <Route path="/checkout" element={<Checkout/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register"element={<Register/>}/>
  <Route path="/razorpaybutton"element={<RazorpayButton/>}/>
  <Route path="/done"element={<Done/>}/>
  
</Routes>
</BrowserRouter> 
    
  
  );
}

export default App;
