import mongoose from "mongoose";

export const dbconnnct = async()=>{
    try {
        const stringURi = process.env.MONGO_URI;
        const connection = await mongoose.connect(stringURi);
        console.log(connection.connection.host);  
        if(connection) {
            console.log("Database connected successfully");
        }  
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    } 
}