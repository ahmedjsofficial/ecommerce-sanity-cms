import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51KwwPXCfQa2WnrXMa5MGQMJlC8m0kOGSVUt4fOZF8C1dvBiVt109CO3tD0cJ49ESAZCwjeTOzXPwR55XydlemTHI00RSvQ34UB";

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
}

export default getStripe;