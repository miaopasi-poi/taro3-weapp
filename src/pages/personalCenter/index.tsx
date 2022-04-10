/*
 * @Author: your name
 * @Date: 2022-04-07 16:22:39
 * @LastEditTime: 2022-04-11 00:08:30
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/src/pages/personalCenter/index.tsx
 */
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import ThemeTriggerSwitch from './ThemeTriggerSwitch';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>个人中心</Text>
        <ThemeTriggerSwitch/>
      </View>
    )
  }
}