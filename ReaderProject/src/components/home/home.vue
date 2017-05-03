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
    <booklist :listdata="hot" :serial="true" :shownum="5"></booklist>
    <split></split>
    <div class="channel-title"><p class="title">女生最爱</p></div>
    <booklist :listdata="femalelove" :serial="false" :shownum="shownum"></booklist>
    <div class="channel-footer">
      <a class="next-btn" href="javascrit:">换一换</a>
      <router-link to="/female" class="more-btn">女生频道>></router-link>
    </div>
    <split></split>
    <div class="channel-title"><p class="title">男生最爱</p></div>
    <booklist :listdata="malelove" :serial="false" :shownum="shownum"></booklist>
    <div class="channel-footer">
      <a class="next-btn" href="javascrit:">换一换</a>
      <router-link to="/male" class="more-btn">男生频道>></router-link>
    </div>
    <split></split>
  </div>
</template>

<script type="text/ecmascript-6">
  import searchview from '../searchview/searchview.vue'
  import split from '../split/split.vue'
  import booklist from '../booklist/booklist.vue'

  export default {
    data () {
      return {
        serial: false,
        shownum: 3
      }
    },
    props: {
      homedata: {
        type: Object
      },
      hot: {
        type: Array
      },
      top: {
        type: Array
      },
      malelove: {
        type: Array
      },
      femalelove: {
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
  .home .channel-footer{
    overflow: hidden;
    border-top: 1px solid #f0f0f0;
  }
  .home .channel-footer a{
    float: left;
    padding: 14px;
    width: 50%;
    font: 13px/1.3em a;
    color: #333;
    text-align: center;
    box-sizing: border-box;
  }
  .home .channel-footer a:first-child{
    border-right: 1px solid #f0f0f0;
  }
</style>
