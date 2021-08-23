<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import {
  getHomeMultidata,
  getHomeGoods
} from 'network/home.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
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
      currentType: 'pop'
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
  methods: {
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
    }
  }
}
</script>

<style scope>
#home {
  padding-top: 44px;
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
</style>
