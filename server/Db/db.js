import mongoose from "mongoose";

export const dbconnnct = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(connection.connection.host);  
        if(connection) {
            console.log("Database connected successfully");
        }  
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    } 
}