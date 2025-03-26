#!/bin/bash
set -e  # Stop on errors

echo "🚀 Removing the dist folder..."
rm dist/* -rf 

echo "🚀 Building Backend..."
cd backend
npm install
npm run build
# npm run start:prod

echo "🚀 Building Frontend..."
cd ../frontend
npm install
npm run build

echo "✅ Build Completed Successfully!"
