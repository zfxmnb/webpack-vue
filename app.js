const isProd = process.env.NODE_ENV === 'production'
var colors = require('colors');
const fs = require('fs')
const MemoryFileSystem = require('memory-fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const serialize = require('serialize-javascript')
const favicon = require('serve-favicon')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const template = require('art-template')

const mfs = new MemoryFileSystem();
console.log(mfs.existsSync)

const app = express()

const serve = (path, cache) => express.static(resolve(path), {
    maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

const resolve = file => path.resolve(__dirname, file)

const webpackConfig = require('./webpack.config.js')
const webpackObject = webpack(webpackConfig);

app.use(webpackDevMiddleware(webpackObject, {
    publicPath: './complete',
    stats: {
        colors: true,
        chunks: false
    }  
}))

app.use(webpackHotMiddleware(webpackObject,{
    log: false,
    heartbeat: 2000,
}))

app.use(compression({ threshold: 0 }))
app.use(favicon('./complete/src/images/img1.png'))
app.use('/dist', serve('./dist'))
app.use('/src', serve('./complete/src'))

const request = require('./request');
app.get('*', async (req, res) => {
    const data = JSON.stringify(await request());
    const page = req._parsedUrl.pathname.slice(1)||"index";
    const pageUrl = resolve(`./complete/${page}.html`);
    res.setHeader('Content-Type', 'text-html')
    let html = "";
    if(fs.existsSync(pageUrl)){
        html = template(pageUrl, {
            data: data
        })
        //html = fs.readFileSync(pageUrl,'utf-8')
    }else{
        res.status(404)
        html = fs.readFileSync('./error.html','utf-8')
    }
    res.write(html)
    res.end("");
})

const PORT = process.env.PORT || 8088
const HOST = process.env.HOST || '127.0.0.1'

app.listen(PORT, HOST, () => {
  console.log(`\nserver started at ${HOST}:${PORT} \n`.green)
})


