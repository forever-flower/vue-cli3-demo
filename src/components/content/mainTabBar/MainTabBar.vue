<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="~assets/logo.png">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/logo.png">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="~assets/logo.png">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/logo.png">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:item-icon>
        <img src="~assets/logo.png">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/logo.png">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="~assets/logo.png">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/logo.png">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components: { TabBar, TabBarItem }
}
</script>

<style>
</style>
