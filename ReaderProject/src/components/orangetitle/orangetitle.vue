<template>
  <div class="orange-title">
    <h2 class="title-left">{{title.ad_name}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        title: {
          type: Object
        }
      }
    }
</script>

<style rel="stylesheet/css">
  .orange-title{
    position: relative;
    padding: 12px 14px;
    border-bottom: 1px solid #f0f0f0;
    border-left: 6px solid #ffab18;
  }
  .orange-title .title-left{
    text-align: left;
    font-size: 16px;
    color: #333;
  }
</style>
