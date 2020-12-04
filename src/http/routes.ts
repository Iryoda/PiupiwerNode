import express from 'express';
import { send } from 'process';

const routes = express.Router();

routes.use('/user', (request , response)=>{
    response.json({"ta ok" : "ok"});
})


export default routes;