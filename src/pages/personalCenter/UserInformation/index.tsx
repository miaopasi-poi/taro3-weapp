/*
 * @Author: liuxi
 * @Date: 2022-04-14 10:22:46
 * @LastEditTime: 2022-04-14 15:20:30
 * @LastEditors: liuxi
 * @Description: 个人中心头部用户信息模块
 * @FilePath: /taro3-weapp/src/pages/personalCenter/UserInformation.tsx
 */

import React from 'react';
import { AtAvatar } from 'taro-ui';
import {  View, Text } from '@/components/ThemeUI';

export const UserInformation = () => {
    return <View>
        <AtAvatar circle image='https://jdc.jd.com/img/200'/>
    </View>
};
