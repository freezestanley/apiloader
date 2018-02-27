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


