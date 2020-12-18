import "reflect-metadata";
import './config/env';
import express from 'express';
import routes from "../http/routes";
import './database'; 

const app = express();

app.use(express.json());

app.use(routes);

app.listen('3333', ()=>{
    console.log("✔✔ Sever init");
})