/*
 * @Author: your name
 * @Date: 2022-04-07 16:22:39
 * @LastEditTime: 2022-04-11 11:09:17
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/src/pages/personalCenter/index.tsx
 */
import { Component } from 'react'
import ThemeTriggerSwitch from './ThemeTriggerSwitch';
import { Container, View, Text } from '@/components/BUI';
import { ThemeProvider } from '@/components/BUI/theme';

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