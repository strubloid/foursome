import dotenv from 'dotenv';
dotenv.config();
import { Server } from './Server';
import { App }  from './app';

// Starting the App Instance
let appObject = new App();
let app = appObject.getApp();

// Starting the server
new Server(app).start();

