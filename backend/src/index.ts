import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import serverless from 'serverless-http';

// Convert Express app to Netlify function handler
const expressHandler = serverless(app);

// Wrap correctly to match Netlify's expected Handler signature
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const result = await expressHandler(event, context);
  return result as any; // Necessary casting here
};

export { handler };
