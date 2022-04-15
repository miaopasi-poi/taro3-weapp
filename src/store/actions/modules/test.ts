/*
 * @Author: liuxi
 * @Date: 2022-04-14 18:24:09
 * @LastEditTime: 2022-04-15 11:50:11
 * @LastEditors: liuxi
 * @Description: action编写示例
 * @FilePath: /taro3-weapp/src/store/actions/modules/test.ts
 */

import * as types from '../../actionsConstant';
import { ToItemType } from '../../types/test';

// 添加一个todo item【编写示例】
export  const addToItem = (itemInfo: ToItemType) => {
    return {
        type: types.TEST_ADD_TODO,
        ...itemInfo,
    }
}

// 添加一个todo item 选中和取消选中【编写示例】
export  const toggleToItem = () => {
    return {
        type: types.TEST_ADD_TODO
    }
}