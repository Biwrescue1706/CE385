const path = require('path');

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3")
    }
  }
};
