import serverless from 'serverless-http';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { Express, Router } from 'express';
import dotenv from 'dotenv';
import { MainRouter } from './mainRouter';
import { App } from './app';
dotenv.config();

// starting netifly handler
let handler: Handler | undefined;

export class Server {

  private isNetlify: boolean;
  private port: number | string;
  private app: Express;
  private appObject: App;
  private mainRouter: MainRouter;
  private router: Router;

  constructor(appObject: App, mainRouter: MainRouter) {

    // getting references to the server, in this case is netlify
    this.isNetlify = process.env.IS_NETLIFY === 'true';

    console.log("CHECK THIS OUT")
    console.log(this.isNetlify)
    console.log("CHECK THIS OUT")

    // basic a port configuration
    this.port = process.env.PORT || 3000;

    // main base objects of this application
    this.appObject = appObject;
    this.mainRouter = mainRouter;

    // getting the express instance
    this.app = this.appObject.getApp();

    // getting the router instance   
    this.router = this.mainRouter.getRouter();
  }

  public start(): void {

    console.log("[Start] SERVER.TS");

    // quick check if is netlify or its on local environment.
    if (this.isNetlify) {
      
      console.log("[Netifly] TRUE");

      // we need to add this so the api is cofigured to work on netifly
      this.app.use('/.netlify/functions/api', this.router);

      // another configuration that i've found need to have to make it work
      const expressHandler = serverless(this.app);
      handler = async (event: HandlerEvent, context: HandlerContext) => {
        const result = await expressHandler(event, context);
        return result as any;
      };

    } else {

      console.log("[Netifly] FALSE");
      
      // basic configuration for local environment
      this.app.use(this.router);
      // this.app.use('/.netlify/functions/api', this.router);

      this.app.listen(this.port, () => {
        console.log(`✅ Local backend server is running on http://localhost:${this.port}`);
      });
    }
  }
}

export { handler };


