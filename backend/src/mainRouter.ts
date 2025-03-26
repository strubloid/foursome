import { Router, Request, Response } from 'express';

export class MainRouter {
  
  public router: Router;

  /**
   * Starting the main router controller class.
   * @param router an instance of the router.
   */
  constructor(router: Router) {
    this.router = router;
    this.initializeStatusAPICall();
  }

  /**
   * This is a simple status API call, that will return a simple message.
   * @returns This will return a simple message.
   */
  private initializeStatusAPICall(): void {
    this.router.get('/api/status', (req: Request, res: Response) => {
      res.json({ status: 'OK', message: 'Service is running' });
    });
  }

  /**
   * The router object contain the reference of all routes, so you can use it to create new things in it.
   * @returns This will return the router instance.
   */
  public getRouter(): Router {
    return this.router;
  }
}