/*
 * @Author: liuxi
 * @Date: 2022-04-13 15:42:00
 * @LastEditTime: 2022-04-15 14:02:18
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/src/store/index.ts
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk))
);

export default store;

