#!/bin/bash
echo  ' - Alright, here we go. trigerring auto deploy .. ..'  &&  echo




installDependencies() {
    echo  " Installing application dependencies .. .."  &&  echo
    npm install -g @quasar/cli
    npm install --progress=false
    quasar build -m ssr
}



start() {
    cd dist/ssr
    
}

installDependencies && start
