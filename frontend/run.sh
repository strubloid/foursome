#!/bin/bash

MY_DIR=$(dirname $(readlink -f "$0") | sed  "s/\/[^\/]*$//")
USER=$(whoami)

NODE_MODULES_DIR="$MY_DIR/node_modules"
BUILD_FOLDER="$MY_DIR/dist"

echo "==============================================================================="
echo "=== Deployment ================================================================"
echo "=== SRC: $MY_DIR"
echo "=== USER: $USER"
echo "=== Node Modules: $NODE_MODULES_DIR"
echo "=== Build At : $BUILD_FOLDER"
echo "==============================================================================="

## entering the frontend folder
cd frontend

## running any new package before start the project
npm install 

## runs the project
npm run start