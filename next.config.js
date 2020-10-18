const withOptimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withOptimizedImages({
  target: 'serverless',
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config;
  },
});
