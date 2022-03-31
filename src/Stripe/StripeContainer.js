import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { Wrapper } from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51KbW09L0sCDDwHDA8q86ja7H1HNK2hR3UHOuuQezwvlSxDonhWwvQU0nsyi7eLYGWX8ytL1M5bENLxGwjj1vZD1Y00FiydMYWz";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Wrapper />
    </Elements>
  );
};

export default Stripe;
