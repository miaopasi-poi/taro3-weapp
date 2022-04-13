/*
 * @Author: liuxi
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-13 14:32:50
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/app.tsx
 */

import { Component } from 'react'
import { ThemeProvider } from '@/components/ThemeUI'
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
