/*
 * @Author: liuxi
 * @Date: 2022-04-14 18:15:26
 * @LastEditTime: 2022-04-15 11:50:10
 * @LastEditors: liuxi
 * @Description: reducer编写示例
 * @FilePath: /taro3-weapp/src/store/reducers/test.ts
 */

import * as types from '../actionsConstant';
import { ToItemType } from '../types/test';

export const test = (state = [], action) => {
    switch (action.type) {
      case types.TEST_ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case types.TEST_TOGGLE_TODO:
        return state.map((todo: ToItemType) =>
          (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }