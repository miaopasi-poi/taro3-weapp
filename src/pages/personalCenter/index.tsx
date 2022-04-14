/*
 * @Author: your name
 * @Date: 2022-04-07 16:22:39
 * @LastEditTime: 2022-04-14 09:40:26
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/pages/personalCenter/index.tsx
 */
import { Component } from 'react'
import ThemeTriggerSwitch from './ThemeTriggerSwitch';
import { Container, View, Text } from '@/components/ThemeUI';

definePageConfig({
  navigationBarTitleText: '个人中心'
})
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <Container fill>
          <View className='index'>
            <Text>个人中心</Text>
            <ThemeTriggerSwitch/>
          </View>
        </Container>
    )
  }
}