import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CartScreen from "./screens/CartScreen";
import SingleProductScreen from "./screens/SingleProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
const App = () => {
  return (
   
     <Router>
      <Header/>
      <main className="py-3">
      <Container>
       
     <Routes>
    <Route path="/login" element={<LoginScreen/>}/>
    <Route path="/signup" element={<RegisterScreen/>}/>
    <Route path="/profile" element={<ProfileScreen/>} />
    <Route path="/shipping" element={<ShippingScreen/>} />
     <Route path="/" element={<HomeScreen />} />
     
     <Route path="/product/:id" element={<SingleProductScreen/>} />
   
     <Route path="/cart/:id" element={<CartScreen/>} />
     
     <Route path="/cart" element={<CartScreen/>} />
     
     </Routes>
   
  
    
        
      </Container>
      
      
      </main>
      <Footer/>
    </Router>
  
  );
};

export default App;
