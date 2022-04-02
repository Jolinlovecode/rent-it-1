import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
// components
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import OnRenting from "./components/OnRenting";
import ItemBooking from "./components/ItemBooking";
import RentedHistory from "./components/RentedHistory";
import Payment from "./components/Payment";


// stylesheet
import "./styles/App.css";

export default function App() {

const [state, setState] = useState([]);

useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3000/items"),  
    ]).then((all) => {
      console.log("all:::", all[0]);
      setState(all[0].data);
      
    });
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ItemsList items={state} />} />
          <Route path="/items/:id" element={<ItemBooking items={state} />}  />
          <Route path="/renting" element={<OnRenting />} />
          <Route path="/rented" element={<RentedHistory />} />
          <Route path="/items/:id/payment" element={<Payment />} />   
        </Routes>
      </Router> 
    </div>
  );
}
