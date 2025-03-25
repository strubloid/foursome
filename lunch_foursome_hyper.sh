#!/bin/bash
FOURSOME_FOLDER=~/apps/foursome

if [ "$1" = "frontend" ]; then
  cd "$FOURSOME_FOLDER/frontend"
elif [ "$1" = "backend" ]; then
  cd "$FOURSOME_FOLDER/backend"
else
  echo "You must choose between: launch_foursome.sh [frontend|backend]"
  exit 1
fi

bash