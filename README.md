# d3-webpack
Bare minimum example showcasing d3 v7 with webpack 5. Initially it was thought that d3 didn't provide file extensions
which causes webpack 5 to fail compilation due to https://webpack.js.org/configuration/module/#resolvefullyspecified, but
here is actually a working example using babel-loader.

## Prerequisites
* node >= 14.17.1
* npm >= 6.14.13

## Start up
If you have just cloned this repo do the following
```sh
npm i
npm start
```

otherwise if you have node_modules installed, just do
```sh
npm start
```
