# Simple Webpack configuration, Ready to run!

It works with @Babel and contains SCSS loader.
Also it is set up to create you HTML pages automatically.

**Install localy** 
```javascript
npm init
```

**Run compiler** 
```javascript
npm run wbp
```

**Run watch** 
```javascript
npm run watch
```

**Config**
```javascript
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
```

**Package.json**
```javascript
  "main": "index.js",
  "scripts": {
    "wbp": "webpack --mode development",
    "watch": "webpack --w --mode development",
    "dev": "webpack-dev-server --mode development --open"
  }
```

