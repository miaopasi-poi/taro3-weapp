/*
 * @Author: liuxi
 * @Date: 2022-04-14 18:10:04
 * @LastEditTime: 2022-04-15 14:52:02
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/store/reducers/index.ts
 */
import { combineReducers } from 'redux';
import { test } from './test';

export default combineReducers({
  test,
  // 其他reducer跟在后面
})
