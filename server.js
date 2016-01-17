require("babel-core/register");
var Promise = require('bluebird')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

const port = 8080

Promise.promisifyAll([WebpackDevServer])

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only'
})

server.listenAsync(port, 'localhost')
  .then(() => console.log(`Webpack is working on ${port}`))
  .catch(err => console.error(err))