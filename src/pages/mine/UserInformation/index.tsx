/*
 * @Author: liuxi
 * @Date: 2022-04-14 10:22:46
 * @LastEditTime: 2022-04-15 15:57:29
 * @LastEditors: liuxi
 * @Description: 个人中心头部用户信息模块
 * @FilePath: /taro3-weapp/src/pages/mine/UserInformation/index.tsx
 */

import React from 'react';
import { shallowEqual, useSelector, useDispatch, } from 'react-redux';
import { AtAvatar } from 'taro-ui';
import {  View, Text } from '@/components/ThemeUI';
import { ReduxStateType } from '../../../store/data';
import "./index.scss";

export const UserInformation: React.FC = () => {
    const dispatch  = useDispatch();
    const testState = useSelector((state: ReduxStateType) => state.test, shallowEqual);
 
    return <View className="user-information">
        {/* @ts-ignore */}
        <AtAvatar
            size ="large"
            circle
            image='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652592766&t=005ca63be6dc195d9ffa9b8d8dde5c9d'
        />
        <View className="user-information__info">
            <Text className="username">LLLLLLLLucia</Text>
            <Text className="phonenumber">18513597019</Text>
        </View>
    </View>
};
