<template>
  <var-swipe class="swipe" :autoplay="2000">
    <var-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img class="swipe-item" :src="item.image923"/>
      </a>
    </var-swipe-item>
  </var-swipe>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swipe {
  height: 160px;
}
.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
