const Stripe = require('stripe');
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };
  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const { plan, size, amount, currency = 'aud' } = JSON.parse(event.body);
    const pi = await stripe.paymentIntents.create({ amount: Math.round(amount*100), currency, metadata: { plan, size: String(size) }, automatic_payment_methods: { enabled: true } });
    return { statusCode: 200, headers, body: JSON.stringify({ clientSecret: pi.client_secret }) };
  } catch (e) { return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) }; }
};