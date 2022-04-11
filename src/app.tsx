/*
 * @Author: liuxi
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-11 22:14:34
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/app.tsx
 */

import { Component } from 'react'
import ThemeProvider from '@/components/BUI/theme'
import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return <ThemeProvider>{this.props.children}</ThemeProvider>
  }
}

export default App
