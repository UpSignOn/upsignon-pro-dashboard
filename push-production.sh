if [ -z "$1" ]
  then
    echo "Usage: push-production.sh <commit message>"
    exit 1;
fi
find . -name '.DS_Store' -type f -delete

git stash -u
git checkout prod-source
cd front
yarn install

mv .env .env-backup
cp dot-env-template .env
npx react-scripts build
rm .env
mv .env-backup .env

cd ../back
yarn install
yarn build-server


cd ../production-pro-dashboard
git fetch --all
git reset --hard
git checkout production

rm -rf ./back/compiledServer
rm -rf ./back/scripts

cp -r ../upsignon-pro-dashboard/back/compiledServer ./back/compiledServer
cp -r ../upsignon-pro-dashboard/back/scripts ./back/scripts
cp ../upsignon-pro-dashboard/back/dot-env-template ./back/dot-env-template
cp ../upsignon-pro-dashboard/back/dashboard.config.js ./back/dashboard.config.js
cp ../upsignon-pro-dashboard/back/prod-package.json ./back/package.json

rm -rf ./front/build
cp ../upsignon-pro-dashboard/front/build ./front/build
cp ../upsignon-pro-dashboard/front/dot-env-template ./front/dot-env-template
cp ../upsignon-pro-dashboard/front/prod-package.json ./front/package.json

cp ../upsignon-pro-dashboard/update.sh ./update.sh
cp ../upsignon-pro-dashboard/post-update.sh ./post-update.sh
cp ../upsignon-pro-dashboard/build.gitignore ./.gitignore

git add .
git commit -m "$1"
git push
