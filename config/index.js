/*
 * @Author: your name
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-11 10:03:00
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/config/index.js
 */

const path = require('path')
const config = {
  projectName: 'taro3-weapp',
  date: '2022-4-6',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
  },
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    webpackChain(chain, webpack) {
      // linaria/loader 选项详见 https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack
      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('linaria/loader')
        .options({
          sourceMap: process.env.NODE_ENV !== 'production',
        })
        // console.log('chain====', chain.resolve)
        chain.merge({
          resolve: {
            extensions: ['.tsx', '.ts', '.d.ts', '.jsx', '.js', '.scss'],
          }
        })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain, webpack) {
      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('linaria/loader')
        .options({
          sourceMap: process.env.NODE_ENV !== 'production',
        })
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
