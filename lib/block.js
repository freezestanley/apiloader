module.exports = function (splitString) {
  return {
      '__attr': (str, current, root) => {
        current.node.attr = current.node.attr ? current.node.attr : []
        var a = splitString(str)
        current.node.attr.push(a)
      },
      '__function': (str, current, root) => {
        current.node.function = current.node.function ? current.node.function : []
        var a = splitString(str)
        current.node.function.push(a)
        current.node = a
      },
      '__params': (str, current, root) => {
        current.node.params = current.node.params ? current.node.params : []
        var a = splitString(str)
        current.node.params.push(a)
      },
      '__return': (str, current, root) => {
        var a = splitString(str)
        current.node.return = a
      },
      '__example': (str, current, root) => {
        current.node.example = current.node.example ? current.node.example : []
        current.node.example.push(str)
      }
    }
}