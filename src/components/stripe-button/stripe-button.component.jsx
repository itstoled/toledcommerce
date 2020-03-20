import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_fZWgRobL7JCQhh7FfWNHaifG00b2rwwVSY";
  const onToken = token => {
    console.log(token);
    alert("Payment succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="toledcommerce"
      billingAdress
      shipppingAdress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`total: $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
