/*
 * @Author: liuxi
 * @Date: 2022-04-15 16:37:17
 * @LastEditTime: 2022-04-15 17:17:50
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/spkMine/pages/login.tsx
 */

import React from 'react';
import Taro from '@tarojs/taro';
import { Container, View, Text, Button } from '@/components/ThemeUI';

const Login: React.FC = () => {

    const login = () => {
        Taro.login({
            success: function(res){
                console.log(res)
            }
        })
    };
    
    return <Container fill>
        <Button open-type='openSetting'>微信登录</Button>
    </Container>
}

export default Login;