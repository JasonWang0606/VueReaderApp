<template>
  <div class="channel-header">
    <div class="top">
      <router-link to="/home" class="back-icon"></router-link>
      <span class="title">{{title.name}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        title: Object
      }
    }
</script>

<style rel="stylesheet/css">
  .channel-header .top{
    position: relative;
    line-height: 44px;
    height: 44px;
    background: #efeff0;
    border-bottom: 1px solid #ddd;
  }
  .channel-header .top .back-icon{
    float: left;
    width: 42px;
    height: 44px;
  }
  .channel-header .top .back-icon:after{
    display: block;
    content: " ";
    margin: 15px 0 0 16px;
    width: 10px;
    height: 16px;
    background: url("./back.png") no-repeat;
    background-size: 10px 16px;
  }
  .channel-header .top .title{
    font: 15px/45px a;
  }
</style>
