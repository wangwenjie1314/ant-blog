//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(webpackConfig) {
  webpackConfig.module.loaders.forEach(function(loader) {
    if (loader.loader === 'babel') {
      // https://github.com/ant-design/babel-plugin-antd
      loader.query.plugins.push('antd');
    }
    // if (loader.test.toString() === '/\\.less$/') {
    //  loader.loader = 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
    // }
    // if (loader.test.toString() === '/\\.css$/') {
    //  loader.loader = 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
    // }
    // if (loader.test.toString() === '/\\.less$/') {
    //  loader.loader = ExtractTextPlugin.extract(
    //    'css?sourceMap!' +
    //    'autoprefixer-loader!' +
    //    `less?{"sourceMap":true}`
    //   );
    // }
    // if (loader.test.toString() === '/\\.scss$/') {
    //  loader.loader = ExtractTextPlugin.extract(
    //    'css?sourceMap!sass-loader!' +
    //    'autoprefixer-loader!' +
    //    `scss?{"sourceMap":true}`
    //    //"style-loader", 'css-loader?sourceMap!sass-loader!cssnext-loader'
    //   );
    // }
    return loader;
  });

  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify',
  });
  //console.log(webpackConfig);
  return webpackConfig;
};
