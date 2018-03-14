module.exports = function (splitString) {
  return {
      '__attr': (str, current, root) => {
        current.node.attr = current.node.attr ? current.node.attr : []
        var a = splitString(str)
        a.__info.parent = current.node
        current.node.attr.push(a)
      },
      '__params': (str, current, root) => {
        current.node.params = current.node.params ? current.node.params : []
        var a = splitString(str)
        a.__info.parent = current.node
        current.node.params.push(a)
      },
      '__return': (str, current, root) => {
        var a = splitString(str)
        a.__info.parent = current.node
        current.node.return = a
      },
      '__example': (str, current, root) => {
        current.node.example = current.node.example ? current.node.example : []
        current.node.example.push(str)
      }
    }
}