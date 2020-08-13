#!/bin/bash
echo ' - Alright, here we go. trigerring auto deploy .. ..'

installDependencies() {
    echo " Installing application dependencies .. .."
    npm install -g @quasar/cli
    npm install
    quasar build -m ssr
    cd dist/ssr
}


installDependencies
