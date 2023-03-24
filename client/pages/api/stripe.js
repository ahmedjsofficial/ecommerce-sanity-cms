import Stripe from 'stripe';

const STRIPE_SECRET_KEY =
  "sk_test_51KwwPXCfQa2WnrXMnYwTX7CcOMjWLwE0AQgaik5J7EgjUufOOTW2yEt1tqUgbafDxBiphK4W9Z7zeqccEQjlc7Gb00NWYreXPl";

const stripe = new Stripe(STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const params = {
          submit_type: 'pay',
          mode: 'payment',
          payment_method_types: ['card'],
          billing_address_collection: 'auto',
          shipping_options: [
            { shipping_rate: 'shr_1Kx6goCfQa2WnrXMx36oPObU' },
            { shipping_rate: 'shr_1Kx6gCCfQa2WnrXMXFOTCTVP' },
          ],
          line_items: req.body.map((item) => {
            const img = item.image[0].asset._ref;
            const newImage = img.replace('image-', 'https://cdn.sanity.io/images/qynxnhz9/production/').replace('-webp', '.webp');
  
            return {
              price_data: { 
                currency: 'usd',
                product_data: { 
                  name: item.name,
                  images: [newImage],
                },
                unit_amount: item.price * 100,
              },
              adjustable_quantity: {
                enabled:true,
                minimum: 1,
              },
              quantity: item.quantity
            }
          }),
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/canceled`,
        }
  
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);
  
        res.status(200).json(session);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }