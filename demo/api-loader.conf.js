module.exports = {
  inline: (splitString) => {
    return {
      '__note': (str, current, root) => {
        current.node = root
        var a = splitString(str)  // 对string 解析 生成object
        a.__info.parent = root    // set object parent
        root.components = a
        // current.node = a   当key有namespace 后续的需要挂载到该节点时 使用
      }
    }
  },
  block: (splitString) => {
    return {
      '__code': (str, current, root) => {
        var a = splitString(str)        // 对string 解析 生成object
        a.__info.parent = current.node  // set object parent
        current.node.return = a         // object mount tree
      }
    }
  },
  space: (splitString) => {
    return {
        '__function': (str, current, root) => {
          current.node.function = current.node.function || []
          var a = splitString(str)
          a.__info.parent = current.node
          current.node.function.push(a)
          current.node = a
          current.dom.push(a)
        }
      }
    }
  }
}