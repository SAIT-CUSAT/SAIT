// IMPORT MONGOOSE
import mongoose from 'mongoose';


// write a normal backend code
export default async function handler(req, res) {
    
  res.status(200).json({ text: 'Hello' })
}