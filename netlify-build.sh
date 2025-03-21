#!/bin/bash
set -e  # Stop on errors

echo "🚀 Building Backend..."
cd backend
npm install
npm run build

echo "🚀 Building Frontend..."
cd ../frontend
npm install
npm run build

echo "✅ Build Completed Successfully!"
