<!--
 * @Author: lucia
 * @Date: 2022-04-06 23:23:30
 * @LastEditTime: 2022-04-13 15:23:28
 * @LastEditors: liuxi
 * @Description: 
 * @FilePath: /taro3-weapp/README.md
-->
# Taro 共富乡村-游客端微信小程序

## 分支说明
1. **开发阶段**： 
    - 分支名：姓名-需求描述-创建分支日期 Lucia-create-project-description-20220406
    - 操作：一般情况下以master为开发的基准分支拉取代码创建需求开发分支 

2. **测试阶段**：
    - 分支名：**dev**
    - 操作：从需求分支把代码合并到dev测试分支，dev关联测试环境

3. **回归阶段**：
    - 分支名： **release**
    - 操作：需求测试通过后，把代码从需求分支合并到release分支，release关联测试环境，在测试环境回归测试

4. **上线阶段**：
    - 分支： **master**
    - 操作：
        - 回归测试通过后，合并到master分支准备上线包;
        - 完成上线以后，打上版本tag做标记;
        - 删除已经上线了的开发需求分支


## 开发配置
#### 1. 安装 @tarojs/cli
检查是否安装 `taro -v`
安装 `npm install @tarojs/cli@3.4.4 -g`
node版本跟改为16 `nvm use 16`
安装node-sass 
```
yarn add node-sass
```

#### 2.安装项目依赖
`npm install`

#### 3.运行项目
`npm run dev:weapp`

#### 4.dist目录导入IDE

#### 5.IDE配置
关闭 "ES6 转 ES5"
关闭自动补全
关闭自动压缩混淆

## 目录结构
待补全

## 命名规范

1. 文件和夹命名：
   - 普通文件：
   规则: 驼峰命名
   eg: 我的页面文件夹 personalCenter
   - components组件
   规则: 帕斯卡命名
   eg: 主题 ThemeUI


2. 分包命名：       
    规则: 驼峰命名 且 以spk开头
    eg: 首页文件分包文件夹 spkHome

3. 样式选择器命名 
    规则: 只能由 英文小写单词/字母、减号、__、数字 任意一种或几种组合成
    eg: 
    正确示范：
        container
        container1
        container-wrap
        container-wrap__content

    错误示范：
        containerWrap

4.常量命名
    规则: 蛇形命名（只能由 英文大写单词/字母、_ 任意一种或几种组合成）
    eg: 
        USER_AGENT_TYPE
        USERNAME


## 打包规范
微信小程序开发时使用 `npm run dev:weapp`
微信小程序体验/发布 `npm run build:weapp`