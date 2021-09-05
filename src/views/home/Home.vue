<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" 
        @tabClick="tabClick"
        class="fixed"
        ref="tabControl1" v-show="isTabFixed"/>
    <!-- <scroll class="content"> -->
    <div class="content" ref="content">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <tab-control :titles="['流行', '新款', '精选']" 
        @tabClick="tabClick" 
        ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </div>
    <!-- </scroll> -->
    <back-top @click="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
// import Scroll from 'components/common/scroll/Scroll.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import {
  getHomeMultidata,
  getHomeGoods
} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    // Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {
          page: 0,
          list: [
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/1.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/2.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/3.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/4.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/3.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/4.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/3.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/4.png'
              },
              price: '90',
              cfav: 30
            }
          ]
        },
        'new': {
          page: 0, 
          list: [
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/1.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/2.png'
              },
              price: '90',
              cfav: 30
            }
          ]
        },
        'sell': {
            page: 0, 
            list: [
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/1.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/2.png'
              },
              price: '90',
              cfav: 30
            },
            {
              title: '1',
              show: {
                img: '~assets/imgs/home/3.png'
              },
              price: '90',
              cfav: 30
            }
          ]
        }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()
    // this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')
  },
  mounted() {
    window.addEventListener('scroll', this.scrollChange, true)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollChange, true)
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  methods: {
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    scrollChange() {
      let topHeight = window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if(topHeight > 300) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
      // 文档流高度
      let documentHeight = document.documentElement.clientHeight
      // bodyHeight 窗口的可视高度
      let bodyHeight = document.body.clientHeight
      if(topHeight + bodyHeight >= documentHeight){
        console.log('上拉加载更多')
      }
      // 吸顶效果
      if(topHeight > this.tabOffsetTop) {
        this.isTabFixed = true
      } else {
        this.isTabFixed = false
      }
    },
    // 防抖动函数
    debounce(func, delay) {
      let timer = null
      return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2: 
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
      scrollTo(0, 0)
    }
  }
}
</script>

<style scope>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.content {
  /* overflow: hidden;
  position: absolute;
  top: 21px;
  bottom: 49px;
  left: 0;
  right: 0; */
}
.content {
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 10;
  background-color: #fff;
}
</style>
