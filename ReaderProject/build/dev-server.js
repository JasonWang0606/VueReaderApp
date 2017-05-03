require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

// 用express写nodeserver
var home = require('../mock/home.json')
var category = require('../mock/category.json')
var rank = require('../mock/rank.json')
var female = require('../mock/channel/female.json')
var male = require('../mock/channel/male.json')
var bookdetail = require('../mock/book/18218.json')
var readerChapter = require('../mock/reader/chapter.json')
var readercontent = function (n) {
  if (!n) {
    n = 1;
  }
  var content = require('../mock/reader/data/data' + n + '.json')
  return content;
}

var apiRoutes = express.Router();

apiRoutes.get('/home', function (req, res) {
  res.json({
    errno: 0,
    data: home
  })
})

apiRoutes.get('/category', function (req, res) {
  res.json({
    errno: 0,
    data: category
  })
})

apiRoutes.get('/rank', function (req, res) {
  res.json({
    errno: 0,
    data: rank
  })
})

apiRoutes.get('/female', function (req, res) {
  res.json({
    errno: 0,
    data: female
  })
})

apiRoutes.get('/male', function (req, res) {
  res.json({
    errno: 0,
    data: male
  })
})

apiRoutes.get('/bookdetail', function (req, res) {
  res.json({
    errno: 0,
    data: bookdetail
  })
})

apiRoutes.get('/readerChapter', function (req, res) {
  res.json({
    errno: 0,
    data: readerChapter
  })
})

apiRoutes.get('/readercontent', function (req, res) {
  res.json({
    errno: 0,
    data: readerChapter(n)
  })
})

app.use('/api', apiRoutes)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
