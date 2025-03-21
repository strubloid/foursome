#!/bin/bash

## Entering frontend folder
echo "[Frontend] => Entering Frontend"
# cd frontend 

# ## running the npm installation for the frontend
echo "[Frontend] => npm install"
npm install 

# ## running the build command
echo "[Frontend] => npm build"
npm run build

# ## Entering Backend folder
# echo "[Backend] => Entering Backend"
# cd ../backend 

# ## running the npm installation for the backend
# echo "[Backend] => npm install"
# npm install 

## running the build command
## npm run build