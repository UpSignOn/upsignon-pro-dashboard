git pull origin production --ff-only
mkdir logs
cd front
yarn install
yarn build-front
cd ../back
yarn install
yarn build-server
cd ..
pm2 startOrReload ./back/dashboard.config.js
