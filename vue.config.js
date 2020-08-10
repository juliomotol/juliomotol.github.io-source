module.exports = {
    pwa: {
        name: 'Julio Motol - Full Stack Developer',
        themeColor: '#FFFFFF',
        msTileColor: '#FFFFFF',
        manifestOptions: { short_name: 'Julio Motol' },
        workboxOptions: {
            cacheId: 'juliomotol',
            skipWaiting: true,
        },
    },
    chainWebpack: (config) => {
        config.module
            .rule()
            .test(/\.md$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
            .use('markdown-loader')
            .loader('markdown-loader')
            .end();
    },
};
