import app from './config/express';
import config from './config/config';
import express from 'express';


if(!module.parent){
  // listen on port config.port
  app.listen(config.port,()=>{
    console.log(`server started on port https://127.0.0.1:${config.port} ${config.env}`);
  });
}


export default app;
