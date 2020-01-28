const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATHS = {
  root: path.join(__dirname, '/'),
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../production'),
  assets: 'assets/'
}
const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));
module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  }, 
  output :{
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            //options: {sourceMap: true}
          },
          {
            loader: "postcss-loader",
            options: {
              //sourceMap: true,
              config: {
                path: "src/js/postcss.config.js"
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
           // options: {sourceMap: true}
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "src/js/postcss.config.js"
              }
            }
          },
          {
            loader: "sass-loader",
            //options: {sourceMap: true}
          }
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)/,
        loader: "file-loader",
        exclude: /(pixelperfect)/,
        options:{
          name: '[name].[ext]'
        }
      }    
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    new CopyWebpackPlugin([{
      from: `${PATHS.src}/img`,
      to: `${PATHS.assets}img`
    }]),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
  ]
}