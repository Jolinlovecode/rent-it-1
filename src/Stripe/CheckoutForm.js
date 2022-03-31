import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51KbW09L0sCDDwHDA8q86ja7H1HNK2hR3UHOuuQezwvlSxDonhWwvQU0nsyi7eLYGWX8ytL1M5bENLxGwjj1vZD1Y00FiydMYWz');

export const Wrapper = (props) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm {...props} />
  </Elements>
);


const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("in one")
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        console.log("in !!!")
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: props.payment,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };
  const [numberValid, setNumberValid] = useState(true);
  function handleFocus() {
    setNumberValid(true);
  }

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `payment`; 
    navigate(path);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <button onClick={routeChange} >Pay</button>
    </form>

  );
};
