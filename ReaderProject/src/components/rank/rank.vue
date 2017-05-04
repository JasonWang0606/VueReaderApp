<template>
  <div class="channel">
    <channelheader :title="title"></channelheader>
    <div class="all-content-wrapper">
      <div class="rank-content">
        <ul>
          <li class="rank-item" v-for="(item, index) in descbook.items" v-if="index>18">
            <img class="rank-cover" :src="item.cover" width="90" height="90">
            <div class="rank-content">
              <p class="desc" v-for="(list, index) in item.description">
                <span class="num">{{index + 1}}</span>{{list}}
              </p>
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
          name: '排行'
        }
      }
    },
    props: {
      rankchanneldata: {
        type: Object
      }
    },
    computed: {
      descbook () {
        let d = this.rankchanneldata
        for (let i = 0;i < d.items.length; i++) {
          d.items[i].description = d.items[i].description.split('\n')
        }
        return d
      }
    },
    components: {
      channelheader
    }
  }
</script>

<style rel="stylesheet/css">
  @import "../../common/style/base.css";

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
  .channel .all-content-wrapper .rank-item{
    padding: 12px 0 6px 20px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    font-size: 0;
  }
  .channel .all-content-wrapper .rank-item .rank-cover{
    float: left;
  }
  .channel .all-content-wrapper .rank-item .rank-content{
    margin-top: 5px;
    margin-left: 108px;
    line-height: 26px;
    font-size: 14px;
    color: #555;
  }
  .channel .all-content-wrapper .rank-item .rank-content .desc .num{
    margin-right: 10px;
    color: #777;
  }
</style>
