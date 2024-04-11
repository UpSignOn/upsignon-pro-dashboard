#!/bin/bash

scriptDir=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")
node $scriptDir/replace-public-url.js
~/.npm-global/bin/pm2 startOrGracefulReload $scriptDir/back/dashboard.config.js --update-env
