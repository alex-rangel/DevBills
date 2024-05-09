import mongoose from "mongoose";

export async function setupMongo(): Promise<void> {
    try{
    
        console.log('connecting to DB...') 
        const mongoConnection = await mongoose.connect(process.env.MONGO_URL as string)
        .then(() => console.log("banco de dados conectado"))
    }catch {
        throw new Error('DB not connectd')
    }
}