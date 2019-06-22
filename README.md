# webpack-react
不使用脚手架，搭建一个 webpack + react 的项目，详细记录构建流程。

### 一、项目初始化及依赖安装
#### 1、`npm init -y`
初始化 package.json 文件，在根目录下建立 `.gitignore`文件，内容为：
```javascript
/node_modules/
```
#### 2、安装 `react react-dom`
```jshelllanguage
npm install --save react react-dom
```
切记，一定要是 `--save`安装，只有在开发环境使用的依赖包才会使用`--save-dev`安装。此处安装的`react、react-dom`版本号均为`v16.8.6`。

#### 3、安装`webpack`
```javascript
npm install --save-dev webpack webpack-dev-server
```
其中，webpack 用于打包构建项目文件，webpack-dev-server 可以为我们提供一个简单的 web 服务器，并且能够实时重新加载，避免了修改文件后，需要重复去build文件查看业务逻辑。
此处安装的 webpack 版本为 v4.35.0，webpack-dev-server 版本为 v3.7.2。
由于安装的 webpack 为`v4.x`，根据官网提示，需同时安装 `webpack-cli`:
```javascript
npm install --save-dev webpack-cli
```
安装版本为：`v3.3.4`

#### 4、安装编译插件

在写`react`应用时，通常会用到`es6/7/8`、`JSX`语法，所以需要安装能够编译这些语法的插件：
```javascript
npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin style-loader css-loader file-loader
```
以上插件安装版本及功能如下：
* @babel/cli   v7.4.4
* @babel/core  v7.4.5
* @babel/preset-env  v7.4.5
* @babel/preset-react  v7.0.0
* babel-loader  v8.0.6
* html-webpack-plugin v3.2.0
* style-loader  v0.23.1
* css-loader   v3.0.0
* file-loader  v4.0.0

`@babel/**`插件是为了让`webpack`编译`ES6/7/8`、`JSX`的语法，`html-webpack-plugin`会生成一个`html`文件，且此文件会自动引入`webpack`打包后的`bundle`文件。`style-lodaer`、`css-loader` 用于编译css文件，`file-loader`用于编译图片、字体等文件。

## 二、目录初始化
整个项目的目录结构如下：
```javascript
|-- build       // 构建相关文件目录
  |-- webpack.config.js
|-- config      // 项目配置相关目录
  |-- index.js
|-- src         // 项目主要代码
  |-- api       // api 相关目录
  |-- assets    // 静态资源
  |-- components // 组件
  |-- modules    // 模块，复杂组件
  |-- pgaes      // 页面
  |-- app.js     
  |-- index.js   // 入口
|-- utils        // 公共方法目录
|-- .gitignore
|-- index.html   // 页面入口
|-- package.json
|-- README.md
```
## 三、项目启动
### 1、webpack 配置
```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  module:{
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}
```

### 2、新建 html 文件
在项目根目录新建`index.html`文件，body 中只包含`<div id="root"></div>`即可。

### 3、新建入口文件
在 src 目录下新建 `index.js`，内容如下：
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
console.log(ReactDOM)
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```
其中，App.js 为首页入口，内容如下：
```javascript
import React, { Component } from 'react'
class App extends Component {
  render(){
    return (
      <div>这里是首页</div>
    )
  }
}
export default App
```
此时，在`package.json`文件中添加启动脚本`start`指令：`webpack-dev-server --mode development --config build/webpack.config.js --open --hot`，在终端执行`npm start`即可运行此项目。输入指令后，发现控制台报错，且报错位置为`index.js`文件中使用`<App />`的位置，猜测是不识别`react`的语法，查看`webpack.config.js`发现未添加`react
文件的解析规则，添加`module`:
```javascript
module:{
    rules: [
      {
        test:/\.js?$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }
    ]
}
```
此时重新运行`npm start`，代码编译无报错，且打开浏览器后正常显示`App.js`代码内容。此时一个基本的react项目算是搭建完成。

