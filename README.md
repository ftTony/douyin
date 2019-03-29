## 仿抖音滑动

![douyin](https://user-images.githubusercontent.com/6395813/55222089-f2214b00-5245-11e9-9821-c147f805adfc.gif)


## 实现仔细

- 利用vue的虚拟dom特性保证只有12个节点，当数据变化时，只修改其页面数据，不变化其dom元素，保证直接操作dom性能问题。
- 利用swiper插件，保证了滑动事件兼容性问题。
- 使用html5 localStorage特性，存储已经被访问过的数据，再试访问直接从本地读取数据，而非运程拉取数据。

## 技术栈

- `Vue`：用于构建用户界面的 MVVM 框架。它的核心是响应的数据绑定和组系统件
- `axios`：服务端通讯。结合nodejs后端伪造返回的数据
- `ES6`：ECMAScript 新一代语法，模块化、解构赋值、Promise 等方法非常好用
- `swiper`：移动端滑动组件。
- `webpack`：资源打包工具及web服务器

## 运行环境

IE8+浏览器+、安卓4.5+

## 运行方式

- 第一步：检测本地环境是否已经安装node，[点击](http://www.runoob.com/nodejs/nodejs-install-setup.html/)安装node环境
- 第二步：进入命令行，进入项目根目录，执行命令`npm install`
- 第三步：在当前目录下，执行命令`npm run start`

## 不足点：

- 没有考虑到数据量过大问题，导致内存暴栈问题
- 基本上是使用第三方插件实现此功能

