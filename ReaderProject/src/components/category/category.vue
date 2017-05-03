<template>
  <div class="category">
    <channelheader :title="title"></channelheader>
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
    components: {
      channelheader
    }
  }
</script>

<style rel="stylesheet/css">
  .category{
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
</style>
