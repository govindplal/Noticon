import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import mongoose from "mongoose";
// const {default: mongoose} =  require("mongoose");


export const connectToDb = async ()  => {
    try{
        await mongoose.connect(process.env.MONGO as string)
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     serverSelectionTimeoutMS: 5000 // Timeout waiting for servers to respond
        //     });
        
        console.log('MongoDB connected!');
    } catch(err){
        console.log(`Error connecting to MongoDB: ${err}`);
    }
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
