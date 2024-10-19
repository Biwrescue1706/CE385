const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ...การตั้งค่าอื่นๆ ของคุณ

  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "net": false,
      "tls": false,
      "child_process": false
    }
  },
  plugins: [
    // ใช้ DefinePlugin เพื่อป้องกันปัญหาบางประการ
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
    // ...ปลั๊กอินอื่นๆ ของคุณ
  ]
};
