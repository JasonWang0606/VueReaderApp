<template>
  <div class="home">
    <searchview></searchview>
    <div class="slider-banner">
      <a href="http://dushu.xiaomi.com/#page=channel&id=410">
        <img class="cover" :src="top.ad_pic_url">
      </a>
    </div>
    <div class="nav">
      <div class="nav-tab">
        <router-link to="male">
          <img class="nav-icon" src="./male.png">
          <p class="title">男生</p>
        </router-link>
      </div>
      <div class="nav-tab">
        <router-link to="female">
          <img class="nav-icon" src="./female.png">
          <p class="title">女生</p>
        </router-link>
      </div>
      <div class="nav-tab">
        <router-link to="/category">
          <img class="nav-icon" src="./category.png">
          <p class="title">分类</p>
        </router-link>
      </div>
      <div class="nav-tab">
        <router-link to="/rank">
          <img class="nav-icon" src="./rank.png">
          <p class="title">排行</p>
        </router-link>
      </div>
    </div>
    <split></split>
    <div class="channel-title"><p class="title">本周最火</p></div>
    <booklist :listdata="hot" :serial="true"></booklist>
    <split></split>
    <div class="channel-title"><p class="title">男生最爱</p></div>
    <split></split>
    <div class="channel-title"><p class="title">女生最爱</p></div>
    <split></split>
  </div>
</template>

<script type="text/ecmascript-6">
  import searchview from '../searchview/searchview.vue'
  import split from '../split/split.vue'
  import booklist from '../booklist/booklist.vue'

  export default {
    props: {
      homedata: {
        type: Object
      },
      hot: {
        type: Array
      },
      top: {
        type: Array
      }
    },
    components: {
      searchview,
      split,
      booklist
    }
  }
</script>

<style rel="stylesheet/css">
  .home .slider-banner .cover{
    width: 100%;
  }
  .home .nav{
    display: flex;
    margin: 14px 0 4px;
    line-height: 2.4;
    width: 100%;
    font-size: 12px;
  }
  .home .nav .nav-tab{
    flex: 1;
    text-align: center;
  }
  .home .nav .nav-tab .nav-icon{
    display: block;
    margin: 0 auto;
    width: 22px;
    height: 22px;
  }
  .home .nav .nav-tab .title{
    color: #333;
  }
  .home .channel-title{
    padding: 15px 13px 13px 14px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
  }
  .home .channel-title .title{
    position: relative;
    font: bold 13px/13px a;
    color: rbga(0, 0, 0, 0.9);
  }
</style>
