<template>
  	<div class="home_container">
        <itemcontainer father-component="home"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer.vue'

export default {
    //vue 中的name属性见  [https://cn.vuejs.org/v2/api/#name]
	  name: 'home',

    // 组件定义
  	components: {
  		itemcontainer
  	},

    //自定义一些指令
    directives:{
      // 自定义focus事件
      focus: {
          inserted: function (el, value) {
              if (value) {
                  el.focus();
              }
          }
      }
    },

    //todo...这里可以定义此路由下要初始化的数据
    created(){
        // alert('111')
        // this.initData();
    },
    watch:{
      // call again the method if the route changes
      '$router' (to, from){
          // react to route changes...
      }
    },
   //todo... 这里定义此路由下要进行的函数操作
    methods:{
      initData: function(){
          // alert('222')
      },
    },

   // todo... 此处是vue中计算属性定义函数的地方
   computed:{
    reverse(){

    }
  },

}
</script>

<style lang="less" scoped>
    .home_container{
      width: auto;
      height: 100%;
    }
</style>
