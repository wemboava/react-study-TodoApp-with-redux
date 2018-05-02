'use strict'

const path = require('path')
    , src = path.join(__dirname, '../..', 'src')

module.exports = {
    '_root': path.join('../..', __dirname),
    '_modules': path.join(__dirname, '../..', 'node_modules'),
    '_src': src,
    '_assets': path.join(src, 'assets'),
    '_img': path.join(src, 'assets', 'images'),
    '_fonts': path.join(src, 'assets', 'fonts'),
    '_scss': path.join(src, 'assets', 'scss'),
    '_app': path.join(src, 'app'),
    '_routes': path.join(src, 'routes'),
    '_components': path.join(src, 'app', 'components'),
    '_utils': path.join(src, 'app', 'utils')
}