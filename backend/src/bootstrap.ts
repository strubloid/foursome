import dotenv from 'dotenv';
dotenv.config();
import { LocalServer } from './components/bootstrap/LocalServer';
import { NetlifyServer } from './components/bootstrap/NetlifyServer';
import app from './app';

const IS_NETLIFY = process.env.IS_NETLIFY === 'true';

if (!IS_NETLIFY) {
  new LocalServer().start();
} else {
  new NetlifyServer().start();
}
