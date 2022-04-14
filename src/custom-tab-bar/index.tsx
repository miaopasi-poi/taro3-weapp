/*
 * @Author: your name
 * @Date: 2022-04-07 17:27:48
 * @LastEditTime: 2022-04-14 10:01:37
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/custom-tab-bar/index.tsx
 */

import Taro from '@tarojs/taro';
import { useState } from 'react'
import { AtTabBar } from 'taro-ui';
import { useThemeState } from '@/components/ThemeUI';
import './index.scss'

function CustomTabBar(){
    const [current, setCurrent] = useState(0);
    const tabPath = [
        'pages/index/index',
        'pages/personalCenter/index',
    ]

    const { theme } = useThemeState();

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
            color={theme.color}
            backgroundColor={theme.background}
        />
}
export default CustomTabBar;
