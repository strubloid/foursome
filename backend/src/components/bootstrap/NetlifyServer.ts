import serverless from 'serverless-http';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import dotenv from 'dotenv';
import app from '../../app';

dotenv.config();

// starting netifly handler
let handler: Handler | undefined;

export class NetlifyServer {
  private isNetlify: boolean;
  private port: number | string;

  constructor() {
    this.isNetlify = process.env.IS_NETLIFY === 'true';
    this.port = process.env.PORT || 3000;
  }

  public start(): void {
    if (this.isNetlify) {
      const expressHandler = serverless(app);
      handler = async (event: HandlerEvent, context: HandlerContext) => {
        const result = await expressHandler(event, context);
        return result as any;
      };
    } 
  }
}

export { handler };
