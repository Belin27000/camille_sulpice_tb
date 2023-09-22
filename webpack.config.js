// webpack.config.js (si vous avez un fichier de configuration personnalisé)

const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            "os": require.resolve("os-browserify/browser"),
        }
    },
};
