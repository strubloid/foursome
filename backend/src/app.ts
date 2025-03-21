// src/app.ts
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/process-word', (req, res) => {
  const { word } = req.body;
  res.json({ word });
});

export default app;
