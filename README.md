# webpack-reloaded
### setting a webpack project from scratch

1. first, we initialize the npm project
```
npm init
```
2. then, we create the settings for the developer mode and the production mode in package.json.
```
    "dev": "webpack --mode development ./src/js/main.js --output ./dist/js/main.js",
    "production": "webpack --mode production ./src/js/main.js --output ./dist/js/main.js",
```
3. we install the webpack 4 (or newer versions)
```
npm install webpack --save-dev
```
4. we install the webpack-cli command line interface
```
npm install webpack-cli --save-dev
```
5. after that, we can run
```
npm run dev
```


