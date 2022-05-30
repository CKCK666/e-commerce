import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CartScreen from "./screens/CartScreen";
import SingleProductScreen from "./screens/SingleProductScreen";

const App = () => {
  return (
   
     <Router>
      <Header/>
      <main className="py-3">
      <Container>
       
     <Routes>

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
