import mongoose from "mongoose";
import dotenv from "dotenv";    

export const dbconnnct = async()=>{
    try {
        dotenv.config();
        const stringURi = process.env.MONGO_URI;
        const connection = await mongoose.connect("mongodb+srv://gangasingh1734:eFKaAzhcVm4LzRiC@skills-app.yaqr4di.mongodb.net/"|| stringURi);
        console.log(connection.connection.host);  
        if(connection) {
            console.log("Database connected successfully");
        }  
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    } 
}