import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    res.status(400).json({ error: 'Invalid email address' });
    return;
  }

  // Save the email to your database or email service
  // For demonstration, we'll just log it to the console
  console.log('Received sign-up request for:', email);

  res.status(200).json({ message: 'Signed up successfully' });
}
