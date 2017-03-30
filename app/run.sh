#!/bin/sh

echo "Starting next server"
yarn start &

echo "Starting Nginx"
nginx
