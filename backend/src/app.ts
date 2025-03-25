// src/app.ts
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

export class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private configureRoutes(): void {
    this.app.post('/api/process-word', (req: Request, res: Response) => {
      const { word } = req.body;
      res.json({ word });
    });
  }

  /**
   * 
   * @returns Method that will return the app instance.
   */
  public getApp(){
      return this.app;
  }
}
