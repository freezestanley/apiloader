module.exports = function (splitString) {
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