/* express.js */
import  express  from "express";
import index from "../server/routes/index.route";
import bodyParser from "body-parser";
import cors from 'cors';
import morgan from 'morgan';

const app = express();

/* body-parser */
app.use(bodyParser.json()); // ?
app.use(bodyParser.urlencoded({extends:true}));
/* cors : Access-Control-Allow-Origin */
app.use(cors()); //?
/* morgan : HTTP req logger */
app.use(morgan('dev'));  //?

app.use('/api',index);

export default app;
