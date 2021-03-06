const path    = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const CleanWebpackPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {

  entry: {
    app: './src/root.js'
  },

  output: {
    filename: '[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'ng-annotate-loader'
        }, {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0'],
          }
        }]
      },

      {
        test: /\.html$/,
        use: ['raw-loader']
      },

      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
            use: [{
              loader: "css-loader",
              options: { sourceMap: true, importLoaders: 1 }
            }, {
              loader: "postcss-loader",
              options: { sourceMap: true, plugins: [require('autoprefixer')] }
            }, {
              loader: "sass-loader",
              options: { sourceMap: true }
            }],

            fallback: "style-loader"
        })
      },

      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      }

    ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && !~module.resource.indexOf('node_modules')
      }
    }),

    new ExtractTextPlugin('style.bundle.css'),

    new CleanWebpackPlugin(['dist'])

  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000
  },

  devtool: 'source-map'
  
}