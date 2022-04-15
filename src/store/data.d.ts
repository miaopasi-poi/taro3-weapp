/*
 * @Author: liuxi
 * @Date: 2022-04-15 09:40:17
 * @LastEditTime: 2022-04-15 15:07:58
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/store/data.d.ts
 */

export type ToDoItemType = {
    id: number | string;
    completed: boolean;
    text: string;
}

export interface ReduxStateType {
    test: ToDoItemType[];
}