# apiloader
api-loader webpack

## js|vue ==> api-loader ==> json

> webpeck loader 
> 将 js|vue file 内的注释提取出 转化为json

# Explanatory 

名称    属性默认值    -  描述信息
@attr [deep = true] - watch deep

[deep = true] 属性默认值

{Number} 表示返回值的类型

{Number|String} 可接受Number 或 String 类型

# Keyword

* @break 返回到根节点 当两个块节点相邻时 @break 跳出上节点namespaces 回到根节点

* @watch prA - 描述applicant

* @attr [deep = true] - watch deep

* @components componentsTest1 - this is components

* @props {Number} propA - this is propA type Number

* @computed aPlus - computed aDouble

* @methods doit - function doit
* @params {String|Number} [a = 10] - doit one params
* @return {Number} - descript

* @event onEvent - onEvent 事件

* @class test-component - test-component descript

* @mixins mixin - mixin object

* @extends extend - extends

* @function test - this is test function
* @params {string} [a = A] - test params a
* @params {string} [b = B] - test params b
* @return {Number} [default = 111111] - test function return

```
/**
 * @function test - this is test function
 * @params {string} [a = A] - test params a
 * @params {string} [b = B] - test params b
 * @return {Number} [default = 111111] - test function return
 */

 {
  "function": [{
    "name": "test",
    "descript": "this is test function",
    "params": [{
      "type": "string",
      "defVal": {
        "a": "A"
      },
      "descript": "test params a"
    }, {
      "type": "string",
      "defVal": {
        "b": "B"
      },
      "descript": "test params b"
    }],
    "return": {
      "type": "Number",
      "defVal": {
        "default": "111111"
      },
      "descript": "test function return"
    }
  }]
 }

```
# Configuration

>> Webpack loader rules

```
const apiConfig = require('./api-loader.conf.js')

{
  test: /\.(js|vue)$/,
  loader: 'apiloader', 
  options: apiConfig,
  include: [resolve('src')]
}
```

> api-loader.conf.js 配置文件 在loader内传入

```
module.exports = {
  > // 行元素
  inline: (splitString) => {     
    return {
      '__note': (str, current, root) => {
        root.code = splitString(str)
        current.node = root
      }
    }
  },
  > // 块元素
  block: (splitString) => {
    return {
      '__code': (str, current, root) => {
        current.node.note = current.node.note ? current.node.note : []
        var a = splitString(str)
        current.node.note.push(a)
        current.node = a
      }
    }
  }
}
```

> str             注释的string

> current.node    当前节点    将str转化的object 挂载到 current.node上 

> root            根节点      为整个文档的根节点

* splitString 对str 进行解析 转化为 Object 可不使用 
