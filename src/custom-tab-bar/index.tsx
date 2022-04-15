/*
 * @Author: your name
 * @Date: 2022-04-07 17:27:48
 * @LastEditTime: 2022-04-15 15:52:04
 * @LastEditors: liuxi
 * @Description: 自定义tabBar
 * @FilePath: /taro3-weapp/src/custom-tab-bar/index.tsx
 */

import Taro from '@tarojs/taro';
import { useState, useEffect } from 'react'
import { AtTabBar } from 'taro-ui';
import { useThemeState } from '@/components/ThemeUI';
import './index.scss'

function CustomTabBar(){
    const [current, setCurrent] = useState(1);
    const tabPath = [
        'pages/index/index',
        'pages/mine/index',
    ]

    const { theme } = useThemeState();

    useEffect(() => {
        switchTab(current);
    }, [current]);

    const switchTab = (index) => {
        setCurrent(index);
        Taro.switchTab({
            url: '/'+ tabPath[index],
        });
    }
    // @ts-ignore
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
