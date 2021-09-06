<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <var-icon name="chevron-left" color="#ccc" class="back" @click="backClick"/>
      </template>
      <template v-slot:center>
        <div class="title">
          <div class="title-item"
            v-for="(item, index) in titles" 
            :key="index"
            :class="{'active': index === currentIndex}"
            @click="titleClick(index)">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'Detail',
  components: { NavBar },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  created() {
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 10px;
}
</style>
