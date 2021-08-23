const withAntdLess = require('next-plugin-antd-less')
const withPlugins = require('next-compose-plugins')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

//const isProd = process.env.NODE_ENV === "production";

const localeSubpaths = {
  // en: "en",
  // tr: "tr"
}

const nextJsConfig = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),

  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
}

const antdLessConfig = withAntdLess({
  // optional
  modifyVars: {},
  // optional
  lessVarsFilePath: './styles/less/variables.less',
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config
  }
})

module.exports = withPlugins([[antdLessConfig]], nextJsConfig)
