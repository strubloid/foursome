import { Router, Request, Response } from 'express';

export interface FoursomeRouter {
  
  router: Router;
  
  initializeRoutes(): void;
}