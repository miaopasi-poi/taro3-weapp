/*
 * @Author: liuxi
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-15 11:38:57
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/app.tsx
 */

import { Component } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@/components/ThemeUI'
import store from './store';
import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return <Provider store={store}>
      <ThemeProvider>{this.props.children}</ThemeProvider>
    </Provider>
  }
}

export default App
