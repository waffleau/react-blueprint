const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  const production = process.env.NODE_ENV === 'production';
  return {
    devServer: {
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
      },
      host: '0.0.0.0',
      hot: true,
    },

    devtool: production ? 'source-maps' : 'eval',

    entry: {
      app: ['@babel/polyfill', './src/index.tsx'],
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'src/[name].js',
      chunkFilename: 'src/vendor.js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'images/',
            },
          },
        },
      ],
    },

    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.css', '.js', '.jsx', '.ts', '.tsx'],
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
    ],
  };
};
