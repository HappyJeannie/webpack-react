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
其中，webpack 用于打包构建项目文件，webpack-dev-server 可以为我们提供一个简单的 web 服务器，并且能够实时重新加载，避免了修改文件后，需要重复去build文件查看业务逻辑。在 mac 安装webpack的过程，控制台报错 `Unhandled rejection Error: EACCES: permission denied`，解决方法是直接在本地全局安装 webpack ，`sudo npm install -g webpack`，考虑到此库的代码会被 windows 用户使用，在完成全局安装后，又在此项目中安装了一下 webpack。

此处安装的 webpack 版本为 v4.35.0，webpack-dev-server 版本为 v3.7.2。

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
