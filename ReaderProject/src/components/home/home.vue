<template>
  <div class="home">
    <searchview></searchview>
    <div class="slider-banner">
      <a href="http://dushu.xiaomi.com/#page=channel&id=410">
        <img class="cover" :src="homedata.items[0].data.data[0].ad_pic_url">
      </a>
    </div>
    <div class="nav">
      <div class="nav-tab">
        <a>
          <img class="nav-icon" src="./male.png">
          <p class="title">男生</p>
        </a>
      </div>
      <div class="nav-tab">
        <a>
          <img class="nav-icon" src="./female.png">
          <p class="title">女生</p>
        </a>
      </div>
      <div class="nav-tab">
        <a>
          <img class="nav-icon" src="./category.png">
          <p class="title">分类</p>
        </a>
      </div>
      <div class="nav-tab">
        <a>
          <img class="nav-icon" src="./rank.png">
          <p class="title">排行</p>
        </a>
      </div>
    </div>
    <split></split>
  </div>
</template>

<script type="text/ecmascript-6">
  import searchview from '../searchview/searchview.vue'
  import split from '../split/split.vue'
  export default {
    props: {
      homedata: {
        type: Object
      }
    },
    components: {
      searchview,
      split
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
</style>
