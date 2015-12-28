var buildPath = require('path').join(__dirname, 'public');

module.exports = {
  entry: "./src/Lib.jsx",
  output: {
    path: buildPath,
    filename: "bundle.js",
    publicPath: '/assets/'
  },

  devTool: 'eval', // use inline-source-map or source-map for production use cases

  devServer: {
    inline: true,
    progress: true,

    // parse host and port from env so this is easy
    // to customize
    host: process.env.HOST,
    port: process.env.PORT
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // https://github.com/babel/babel-loader#options
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ["syntax-class-properties"]
        }
      }
    ]
  }
};
