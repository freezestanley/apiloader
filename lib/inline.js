module.exports = function (splitString) {
  return {
    '__class': (str, current, root) => {
      current.node = root
      var a = splitString(str)
      a.__info.parent = root
      root.class = a
    },
    '__mixins': (str, current, root) => {
      current.node = root
      var a = splitString(str)
      a.__info.parent = root
      root.mixins = a
    },
    '__extends': (str, current, root) => {
      current.node = root
      var a = splitString(str)
      a.__info.parent = root
      root.extend = a
    },
    '__components': (str, current, root) => {
      current.node = root
      var a = splitString(str)
      a.__info.parent = root
      root.components = a
    },
    '__watch': (str, current, root) => {
      root.watch = root.watch ? root.watch : []
      var a = splitString(str)
      a.__info.parent = root
      root.watch.push(a)
      current.node = a
    },
    '__props': (str, current, root) => {
      root.props = root.props ? root.props : []
      var a = splitString(str)
      a.__info.parent = root
      root.props.push(a)
      current.node = a
    },
    '__computed': (str, current, root) => {
      root.computed = root.computed ? root.computed : []
      var a = splitString(str)
      a.__info.parent = root
      root.computed.push(a)
      current.node = a
    },
    '__methods': (str, current, root) => {
      root.methods = root.methods ? root.methods : []
      var a = splitString(str)
      a.__info.parent = root
      root.methods.push(a)
      current.node = a
    },
    '__event': (str, current, root) => {
      root.event = root.event ? root.event : []
      var a = splitString(str)
      a.__info.parent = root
      root.event.push(a)
      current.node = a
    },
    '__break': (str, root, node) => {
      root.node = node
    }
  }
}