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
import StripeContainer from "./Stripe/StripeContainer";

// stylesheet
import "./styles/App.css";
// data
import { useStateValue } from "./providers/StateProvider";
// import {Elements} from '@stripe/react-stripe-js';

// import {loadStripe} from '@stripe/stripe-js';


// const stripePromise = loadStripe('pk_test_51KbW09L0sCDDwHDA8q86ja7H1HNK2hR3UHOuuQezwvlSxDonhWwvQU0nsyi7eLYGWX8ytL1M5bENLxGwjj1vZD1Y00FiydMYWz');



export default function App() {

  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{sk_test_51KbW09L0sCDDwHDAPAKuws7ImQ1FWXFJYgFj0wfYCt8mjFdpbZdVAENyAnLfb1Pk6dKAkbuFFVYQzJuv4Oby8d3G005KxKR2N2}}',
  // };

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
      {/* <Elements stripe={stripePromise} ><CheckoutForm /> </Elements> */}
    </div>
  );
}
