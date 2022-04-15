/*
 * @Author: your name
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-15 15:06:18
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/global.d.ts
 */
/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';
declare module '@/components/ThemeUI';
declare module '@/components/ThemeUI/theme';
declare module '@/store';
declare module '@/types';
declare module '@/types/redux';
declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}
