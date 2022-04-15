/*
 * @Author: your name
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-15 16:42:21
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/pages/index/index.tsx
 */

import { Component } from 'react'
import { Container, View, Text, Button } from '@/components/ThemeUI';

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <Container fill>
        <View className='home'>
          <Text>Hello world!</Text>
          <Button loading type='primary'>按钮文案</Button>
        </View>
      </Container>
    )
  }
}
