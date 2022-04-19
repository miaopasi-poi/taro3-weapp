/*
 * @Author: liuxi
 * @Date: 2022-04-15 16:37:31
 * @LastEditTime: 2022-04-15 16:37:31
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/spkMine/pages/register.tsx
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { Container, View, Text, Button } from '@/components/ThemeUI';

const Register: React.FC = () => {
    
    return <Container fill>
        <Button open-type='openSetting'>注册</Button>
    </Container>
}

export default Register;