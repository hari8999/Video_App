
import express from 'express';
import dotenv from "dotenv";
import Connection from './database/db.js';
import Routes from './routes/routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Routes);


//static files
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})


const PORT = 8000; 

const username= process.env.MONGO_USERNAME;
const password= process.env.MONGO_PASSWORD;

Connection(username,password);
app.listen(PORT, console.log(`Server is listening on PORT no. ${PORT}`));