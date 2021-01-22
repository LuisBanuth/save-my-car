import {Router} from "express";
//import multer from 'multer';
//import uploadConfig from './config/upload';
import UsersController from './controllers/UsersController';
//import authMiddleware from "../middlewares/auth";
const authMiddleware = require("../middlewares/auth");

const routes = Router();
//const upload = multer(uploadConfig)

// routes.get('/orphanages', OrphanagesController.index);
// routes.get('/orphanages/:id', OrphanagesController.show);
// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);  
routes.post('/authenticate', UsersController.authenticate);
routes.get('/', (r,rp) => { rp.json('olar') });

routes.use(authMiddleware);
//routes.get('/me/:id', UsersController.me);

export default routes;