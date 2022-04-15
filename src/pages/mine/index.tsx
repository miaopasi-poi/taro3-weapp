/*
 * @Author: your name
 * @Date: 2022-04-07 16:22:39
 * @LastEditTime: 2022-04-15 15:31:50
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/pages/mine/index.tsx
 */
import { Component } from 'react'
import ThemeTriggerSwitch from './ThemeTriggerSwitch';
import { Container, View } from '@/components/ThemeUI';
import { UserInformation } from './UserInformation';

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
            <UserInformation/>
            {/* <ThemeTriggerSwitch/> */}
          </View>
        </Container>
    )
  }
}