// src/app.ts
import express, { Express, Request, Response, Router } from 'express';
import cors from 'cors';

export class App {

  public app: Express;
  public router: Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.configureMiddleware();
  }

  /**
   * Starting any configurations on the middleware side.
   */
  private configureMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  /**
   * This is returning the express instance, so you can use it in the server.
   * @returns Method that will return the app instance.
   */
  public getApp(){
      return this.app;
  }

  /**
   * Use this method to add more and more routes to it.
   * @returns an instance of the router, so you can use eveywhere.
   */
  public getRouter(){
    return this.router;
  }
}
