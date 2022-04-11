/*
 * @Author: your name
 * @Date: 2022-04-06 23:21:15
 * @LastEditTime: 2022-04-11 10:26:01
 * @LastEditors: your name
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
declare module '@/components/BUI/theme'
declare module '@/components/BUI'
declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}
