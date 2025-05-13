import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnnct } from './Db/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// app.use("/user",userRoutes)

app.get("",(req, res) => {
    res.send("Hello World");
}); 


app.listen(PORT, () => {
    dbconnnct();
    console.log(`Server is running on port ${PORT}`);
}); 
