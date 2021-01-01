import React from 'react';
import StrikeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HUtvaFHuLnKEOo3LlhkaiErx2FNrbzAoGChuvPlzbhmpVxaPZOBgGWtQVXB9Lhsba5ldTm7GHGpevoJ2R1Qjo0600WHRHc3Bo'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StrikeCheckout 
      label='Pay Now' 
      name='CRWN Clothing ZTM' 
      billingAddress 
      shippingAddress 
      image='https://svgshare.com/i/CUz.svg' 
      description={`Your total is $${price}`} 
      amount={priceForStripe} 
      panelLabel='Pay Now' 
      token={onToken} 
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;