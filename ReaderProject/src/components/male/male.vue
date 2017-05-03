<template>
  <div class="channel">
    <channelheader :title="title"></channelheader>
    <div class="all-content-wrapper">
      <div class="all-content-channel" v-for="item in malechanneldata.items">
        <orangetitle :title="item"></orangetitle>
        <booklist :listdata="item.data.data" :serial="false" :shownum="shownum"></booklist>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import channelheader from '../channelheader/channelheader.vue'
  import orangetitle from '../orangetitle/orangetitle.vue'
  import booklist from '../booklist/booklist.vue'

  export default {
    data () {
      return {
        title: {
          name: '男生频道'
        },
        shownum: 5
      }
    },
    props: {
      malechanneldata: {
        type: Object
      }
    },
    components: {
      channelheader,
      orangetitle,
      booklist
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
</style>
