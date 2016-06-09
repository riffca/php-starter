"use strict";
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


let options = require('./base');

options.plugins.push(
    new BrowserSyncPlugin({
        port: 3000,
        proxy: 'http://portrait.local/',
        files: [
            './php/public/index.php',
            './php/public/app'
        ]
    })
);
options.node = {
    net: 'empty',
    tls: 'empty'
};

module.exports = options;