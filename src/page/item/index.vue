<template>
  	<div>
    	<itemcontainer father-component="item"></itemcontainer>
  	</div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer.vue'

export default {
	name: 'item',
  	components: {
   		itemcontainer
  	},

  	created(){
      //在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
      // 当进入答题区时开始启动计时
      this.$store.commit('REMBER_TIME');
  	}
}

</script>

<style lang="less">


</style>
