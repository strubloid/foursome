import dotenv from 'dotenv';
dotenv.config();
import { Server } from './Server';
import { App }  from './app';
import { MainRouter } from './mainRouter';
import { Word } from './component/word/Word';

// Starting the App Instance
let appObject = new App();

// starting the routes
let mainRouter = new MainRouter(appObject.getRouter());

// starting the objects
new Word(mainRouter.getRouter()).initializeRoutes();

// Starting the server
new Server(appObject, mainRouter).start();