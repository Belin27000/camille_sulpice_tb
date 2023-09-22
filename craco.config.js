const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    configure: (webpackConfig) => {
        // Ajoutez des règles pour traiter les polyfills manquants
        webpackConfig.resolve.fallback = {
            ...webpackConfig.resolve.fallback,
            os: require.resolve("os-browserify/browser"),
        };
        return webpackConfig;
    },
};