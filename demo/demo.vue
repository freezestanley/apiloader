<template>
  <div>
    hello this is demo
  </div>
</template>

<script>
/**
 * @function test - this is test function
 * @params {string} [a = A] - test params a
 * @params {string} [b = B] - test params b
 * @return {Number} [default = 111111] - test function return
 */
function test (a = 'A', b = 'B') {
  /**
   * @function test1 - descript
   * @return {Number} [default = 123123] - descript
   */
  function test1 () {
    return 123123
  }
  return test1()
}
test()

/**
 * @class test-component - test-component descript
 * @mixins mixin - mixin object
 * @extends extend - extends
 */
export default {
  name: 'test-component',
  mixins: [],
  /**
   * @components componentsTest1, componentsTest2 - this is components
   */
  components: {
  },
  watch: {
    /**
     * @watch prA - 描述applicant
     * @attr [deep = true] - watch deep
     * @attr [immediate = true] - watch immediate
     */
    'prA': {
      deep: true,
      handler () {
      }
    },
    /**
     * @watch prB - 描述applicant
     */
    'prB': function (newValue, oldvalue) {
    }
  },
  props: {
    /**
     * @props {Number} propA - this is propA type Number
     * @attr [required = true] - this is propA required
     * @attr [validator = asfddaf] - this is propA validator
     */
    propA: Number,
    /**
     * @props {String|Number} propB - this is propB type String, Number
     */
    propB: [String, Number],
    /**
     * @props {String} propC - this is propC type String
     * @attr [required = true] - this is propC attr required
     */
    propC: {
      type: String,
      required: true
    },
    /**
     * @props {Object} propD - this is propD type Object
     * @attr [default = hello] - this propD default hello
     */
    propD: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    /**
     * @props {Object} propE - this is propE type Object
     * @attr [validator = 大于10]
     */
    propE: {
      validator: function (value) {
        return value > 10
      }
    }
  },
  computed: {
    /**
     * @computed aPlus - computed aDouble
     */
    aDouble: function () {
      return this.a * 2
    },
    /**
     * @computed aPlus - computed aPlus
     * @attr [get = 1231] - this is computed aPlus get
     * @attr set - this is computed aPlus set
     */
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  },
  methods: {
    /**
     * @methods doit - function doit
     * @params {String|Number} [a = 10] - doit one params
     * @return {Number} - descript
     */
    doit (a = 10) {
      /**
       * @event onEvent - onEvent 事件
       * @params {String|Number} param - onEvent入参
       */
      this.$emit('onEvent', 'onEventParam')
      return 'asf'
    },
    /**
     * @methods doit1 - doit1 function
     * @params {String|Number} [a = 10] - doit1 入参
     * @return {Number} - doit1 return
     */
    doit1 (a = 10) {
      /**
       * @event onEvent1 - onEvent1 事件
       * @params {String} onEvent1Param - doit1 入参
       */
      this.$emit('onEvent1', 'onEvent1Param')
      return 121323
    }
  }
}
</script>
<style>
</style>
