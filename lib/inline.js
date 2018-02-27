module.exports = function (splitString) {
  return {
    '__class': (str, current, root) => {
      root.class = splitString(str)
      current.node = root
    },
    '__mixins': (str, current, root) => {
      root.mixins = str.split(',')
      current.node = root
    },
    '__extends': (str, current, root) => {
      root.extend = str
      current.node = root
    },
    '__components': (str, current, root) => {
      root.components = str.split(',')
      current.node = root
    },
    '__watch': (str, current, root) => {
      root.watch = root.watch ? root.watch : []
      var a = splitString(str)
      root.watch.push(a)
      current.node = a
    },
    '__props': (str, current, root) => {
      root.props = root.props ? root.props : []
      var a = splitString(str)
      root.props.push(a)
      current.node = a
    },
    '__computed': (str, current, root) => {
      root.computed = root.computed ? root.computed : []
      var a = splitString(str)
      root.computed.push(a)
      current.node = a
    },
    '__methods': (str, current, root) => {
      root.methods = root.methods ? root.methods : []
      var a = splitString(str)
      root.methods.push(a)
      current.node = a
    },
    '__event': (str, current, root) => {
      root.event = root.event ? root.event : []
      var a = splitString(str)
      root.event.push(a)
      current.node = a
    },
    '__break': (str, root, node) => {
      root.node = node
    }
  }
}