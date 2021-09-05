<template>
  <var-swipe class="swipe" :autoplay="2000">
    <var-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img class="swipe-item" :src="item.image923" @load="imageLoad"/>
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
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
