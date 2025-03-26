import dotenv from 'dotenv';
dotenv.config();

import serverless from 'serverless-http';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { App } from './app';
import { MainRouter } from './mainRouter';
import { Word } from './component/Word';

const appObject = new App();
const mainRouter = new MainRouter(appObject.getRouter());

// Initialize all your routes
new Word(mainRouter.getRouter()).initializeRoutes();

// Check if we're running on Netlify or local
const isNetlify = process.env.IS_NETLIFY === 'true';

if (!isNetlify) {
  // Local dev mode
  appObject.getApp().use(appObject.getRouter());
  appObject.getApp().listen(appObject.getPort(), () => {
    console.log(`✅ Local backend server is running on http://localhost:${appObject.getPort()}`);
  });
}

// Netlify-specific export
const expressApp = appObject.getApp();
expressApp.use('/.netlify/functions/api', mainRouter.getRouter());

const expressHandler = serverless(expressApp);
let handler: Handler;
handler = async (event: HandlerEvent, context: HandlerContext) => {
    const result = await expressHandler(event, context);
    return result as any;
};

// 👇 THIS is what Netlify will use
export { handler };
