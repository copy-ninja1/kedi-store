const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

const path = require("path");
const withPlugins = require("next-compose-plugins");

const cssConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  ),
};

const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  //
  //   cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },

  //
  webpack(config, options) {
    const { isServer } = options;
    config.resolve.alias = {
      ...config.resolve.alias,
      "@public": path.resolve("./public"),
      "@components": path.resolve("./components"),
      "@redux": path.resolve("./redux"),
      "@utils": path.resolve("./utils"),
    };

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name]-[hash:8].[ext]",
            publicPath: (url) => {
              return `/_next/static/css/${url}`;
            },
            outputPath: `${isServer ? "../" : ""}static/css/`,
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins(
  [
    [withCSS, cssConfig],
    withImages,
    // [withPurgeCss, purgeCssConfig],
  ],
  nextConfig
);
