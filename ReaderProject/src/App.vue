<template>
  <div id="app">
    <div class="header">
      <div class="header-icon checkin"></div>
      <div class="header-icon user"></div>
      <div class="header-tab">
        <div class="header-tab-item">
          <router-link to="/home">书城</router-link>
        </div>
        <div class="header-tab-item">
          <router-link to="/bookbacket">书架</router-link>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view :homedata="homedata" :top="top" :hot="hot" :malelove="malelove" :femalelove="femalelove" :malechanneldata="malechanneldata" :femalechanneldata="femalechanneldata" :categorychanneldata="categorychanneldata" :rankchanneldata="rankchanneldata" :recomend="recomend"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import home from './components/home/home.vue'
  import bookbacket from './components/bookbacket/bookbacket.vue'

  const ERR_OK = 0

  export default {
    data () {
      return {
        homedata: {},
        hot: [],
        top: {},
        malelove: [],
        femalelove: [],
        malechanneldata: {},
        femalechanneldata: {},
        categorychanneldata: {},
        rankchanneldata: {},
        recomend: []
      }
    },
    created () {
      this.$http.get('/api/home').then(function (res) {
        let response = res.data
        if (response.errno === ERR_OK) {
          this.homedata = response.data
          this.top = this.homedata.items[0].data.data[0]
          this.hot = this.homedata.items[1].data.data
          this.femalelove = this.homedata.items[3].data.data
          this.malelove = this.homedata.items[4].data.data
          this.recomend = this.homedata.items[2].data.data
        }
      })
      this.$http.get('/api/male').then(function (res) {
        let response = res.data
        if (response.errno === ERR_OK) {
          this.malechanneldata = response.data
        }
      })
      this.$http.get('/api/female').then(function (res) {
        let response = res.data
        if (response.errno === ERR_OK) {
          this.femalechanneldata = response.data
        }
      })
      this.$http.get('/api/category').then(function (res) {
        let response = res.data
        if (response.errno === ERR_OK) {
          this.categorychanneldata = response.data
        }
      })
      this.$http.get('/api/rank').then(function (res) {
        let response = res.data
        if (response.errno === ERR_OK) {
          this.rankchanneldata = response.data
        }
      })
    },
    name: 'app',
    components: {
      home,
      bookbacket
    }
  }
</script>

<style>
  #app{
    padding-top: 45px;
  }
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    line-height: 45px;
    height: 45px;
    background: #efeff0;
    border-bottom: 1px solid #ddd;
  }
  .header .header-icon{
    display: block;
    position: absolute;
    top: 0px;
    width: 44px;
    height: 44px;
  }
  .header .user{
    right: 0px;
    background: url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01j041d5DOT/boUg2EJlVetOMC.png) no-repeat center;
    background-size: 16px;
  }
  .header .checkin{
    left: 0px;
    background: url(http://image.read.duokan.com/mfsv2/download/s010/p01O5K5DzsAZ/2ZODzjwkRQh7l3.png) no-repeat center;
    background-size: 22px;
  }
  .header .header-tab{
    display: flex;
    width: 50%;
    margin: 0px auto;
  }
  .header .header-tab .header-tab-item{
    flex: 1;
    text-align: center;
  }
  .header .header-tab .header-tab-item a{
    margin: 0 auto;
    padding-bottom: 13px;
    font-size: 14px;
    color: #333;
  }
  .header .header-tab .header-tab-item .active{
    color: #ff6600;
    border-bottom: 1px solid #666;
  }
</style>
