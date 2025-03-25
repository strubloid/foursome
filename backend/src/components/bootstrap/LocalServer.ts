// src/server/Server.ts

import dotenv from 'dotenv';
import app from '../../app';

dotenv.config();

export class LocalServer {

  private isNetlify: boolean;
  private port: number | string;

  constructor() {
    this.isNetlify = process.env.IS_NETLIFY === 'true';
    this.port = process.env.PORT || 3000;
  }

  public start(): void {
    if (!this.isNetlify) {
      app.listen(this.port, () => {
        console.log(`✅ Local backend server is running on http://localhost:${this.port}`);
      });
    }
  }
}