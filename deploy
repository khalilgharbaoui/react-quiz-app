#!/bin/bash

# First create the deploys dir
echo "Creating deploys dir: ./deploys"
mkdir -p deploys

# Remove earlier deploys from the deploy dir
echo "Checking for previous deploys to clean up"
if [ -d deploys/static ]; then
  printf "Removing previous deploys..."
  rm -rf deploys/static
  echo "done!"
else
  echo "No previous deploys to clean up, continuing!"
fi

# Redirect everything to index.html
echo "/* /index.html   200" > deploys/_redirects

# Run the build
echo "Runnig npm run build to creat the dist"
npm run build

# Copy over the dist to deploys
printf "Copying over the dist to the deploys..."
cp -r dist deploys/static
cp index.html deploys/
echo "done!"

echo "Your build is ready to be deployed from ./deploys"
