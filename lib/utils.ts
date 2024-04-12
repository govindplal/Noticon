import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const {default: mongoose} =  require("mongoose");


export const connectToDb = async ()  => {
    try{
        await mongoose.connect(process.env.MONGO!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // Timeout waiting for servers to respond
            });
        
        console.log('MongoDB connected!');
    } catch(err){
        console.error(`Error connecting to MongoDB: ${err}`);
        process.exit();
    }
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
