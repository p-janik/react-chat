import Promise from 'bluebird'
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.config'

const port = 8080

Promise.promisifyAll([WebpackDevServer])

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
})

server.listenAsync(port, 'localhost')
  .then(() => console.log(`Webpack is working on ${port}`))
  .catch(err => console.error(err))