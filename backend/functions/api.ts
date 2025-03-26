import dotenv from 'dotenv';
dotenv.config();

import serverless from 'serverless-http';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { App } from './app';
import { Word } from './api/Word';

const appObject = new App();
let app = appObject.getApp();
let router = appObject.getRouter();
let handler: Handler;

// Initialize all your routes
new Word(router);

// Check if we're running on Netlify or local
const isNetlify = process.env.IS_NETLIFY === 'true';

if (!isNetlify) {
  
  console.log('[DEV Mode]')
  // Local dev mode
  app.use(appObject.getRouter());
  app.listen(appObject.getPort(), () => {
    console.log(`✅ Local backend server is running on http://localhost:${appObject.getPort()}`);
  });

} else {

  console.log('[It is on Netlify]')
  app.use('/.netlify/functions/api', router);
  const expressHandler = serverless(app);
  
  handler = async (event: HandlerEvent, context: HandlerContext) => {
      const result = await expressHandler(event, context);
      return result as any;
  };
  
}

export { handler };
