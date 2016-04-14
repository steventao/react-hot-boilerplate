var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      // include 和 exclude 不知道是不是只用设置一个就好了
      { test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src') }, 
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  }
};
