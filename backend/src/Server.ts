import serverless from 'serverless-http';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import dotenv from 'dotenv';
dotenv.config();

// starting netifly handler
let handler: Handler | undefined;

export class Server {
  private isNetlify: boolean;
  private port: number | string;
  private app: any;

  constructor(app) {
    this.isNetlify = process.env.IS_NETLIFY === 'true';
    this.port = process.env.PORT || 3000;
    this.app = app;
  }

  public start(): void {
    if (this.isNetlify) {
      const expressHandler = serverless(this.app);
      handler = async (event: HandlerEvent, context: HandlerContext) => {
        const result = await expressHandler(event, context);
        return result as any;
      };
    } else {
      this.app.listen(this.port, () => {
        console.log(`✅ Local backend server is running on http://localhost:${this.port}`);
      });
    }
  }
}

export { handler };


