/*
 * @Author: your name
 * @Date: 2022-04-07 17:27:48
 * @LastEditTime: 2022-04-10 18:10:54
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /taro3-weapp/src/custom-tab-bar/index.tsx
 */

import Taro from '@tarojs/taro';
import { useState } from 'react'
import { AtTabBar } from 'taro-ui';
import './index.scss'

function CustomTabBar(){
    const [current, setCurrent] = useState(0);
    const tabPath = [
        'pages/index/index',
        'pages/personalCenter/index',
      ]

    const switchTab = (index) => {
        setCurrent(index)
        Taro.switchTab({
            url: '/'+ tabPath[index]
        })
    }
    return <AtTabBar
            fixed
            tabList={[
                { 
                    title: '首页', 
                    iconType: 'home',
                },
                { 
                    title: '我的', 
                    iconType: 'settings', 
                }
            ]}
            onClick={switchTab}
            current={current}
        />
}
export default CustomTabBar;
