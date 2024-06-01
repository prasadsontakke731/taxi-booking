import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import React from 'react';

const CheckOutForm = () => {
  const router = useRouter();
  const stripe: any = useStripe();
  const elements: any = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    const { error: submitError } = await elements.submit();

    if (submitError) {
      return;
    }

    // create payment intent and obtain clientsecret
    const res = await fetch('/api/create-intent', {
      method: 'POST',
      body: JSON.stringify({
        amount: 58,
      }),
    });
    const secretKey = await res.json();
    console.log(secretKey);

    const { error } = await stripe.confirmPayment({
      clientSecret: secretKey,
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/',
      },
    });
    router.push('/');
  };
  return (
    <div className='flex flex-col justify-center w-full items-center mt-20'>
      <form onSubmit={handleSubmit} className='max-w-md'>
        <PaymentElement />
        <button
          className='w-full bg-yellow-400 p-3 mt-2 rounded-lg'
          type='submit'
          //   disabled={!stripe || !elements}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
