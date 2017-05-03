<template>
  <div class="channel">
    <channelheader :title="title"></channelheader>
    <div class="all-content-wrapper">
      <div class="all-content-category" v-for="(item, index) in categorychanneldata.section" v-if="index>1">
        <h3 class="category-title">{{item.name}}</h3>
        <ul>
          <li v-for="sect in item.content">
            <div class="category-item">
              <img class="bg-category" :src="sect.new_image">
              <p class="label-name">{{sect.label}}</p>
              <p class="label-num">{{sect.fiction_count}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import channelheader from '../channelheader/channelheader.vue'

  export default {
    data () {
      return {
        title: {
          name: '分类'
        }
      }
    },
    props: {
      categorychanneldata: {
        type: Object
      }
    },
    components: {
      channelheader
    }
  }
</script>

<style rel="stylesheet/css">
  .channel{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: #fff;
    width: 100%;
    height: 100%;
  }
  .channel .channel-header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
  }
  .channel .all-content-wrapper{
    margin-top: 45px;
  }
  .channel .all-content-wrapper .all-content-category{
    padding: 0px 10px;
  }
  .channel .all-content-wrapper .all-content-category .category-title{
    margin-top: 10px;
    padding-left: 24px;
    line-height: 2.4em;
    border-bottom: 1px solid #eee;
    color: #8A8D8E;
  }
  .channel .all-content-wrapper .all-content-category ul li{
    margin-top: 2%;
  }
  .channel .all-content-wrapper .all-content-category ul li .category-item{
    position: relative;
    height: 66px;
    padding: 0px 16px 21px;
    color: #515151;
  }
  .channel .all-content-wrapper .all-content-category ul li .category-item .bg-category{
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .channel .all-content-wrapper .all-content-category ul li .category-item .label-name{
    padding-top: 21px;
    line-height: 16px;
    font-size: 13px;
  }
  .channel .all-content-wrapper .all-content-category ul li .category-item .label-num{
    line-height: 1em;
    font-size: 11px;
    color: #999;
  }
</style>
