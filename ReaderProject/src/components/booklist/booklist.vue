<template>
  <div class="book-list">
    <ul>
      <li v-for="(item,index) in listdata" v-if="">
        <div class="book-h5 clearfix">
          <a href="#">
            <div class="book-h5__cover">
              <img alt="item.title" :src="item.cover">
              <p class="finish">完结</p>
            </div>
            <div class="book-h5__info">
              <h3 class="name">{{item.title}}</h3>
              <p class="author">{{item.authors}}</p>
              <p class="summary">{{item.summary}}</p>
              <div class="book-h5__wrap" v-if="serial">
                <div class="tag" v-for="tag in item.tags">{{tag}}</div>
              </div>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        listdata: {
          type: Array
        },
        serial: {
          type: Boolean
        }
      }
    }
</script>

<style rel="stylesheet/css">
  @import "../../common/style/base.css";
  .book-list ul{
    padding: 0 13px;
  }
  .book-list ul li{
    padding: 17px 0;
    overflow: hidden;
    border-bottom: 1px solid #f0f0f0;
  }
  .book-h5{
    overflow: hidden;
    width: 100%;
  }
  .book-h5 .book-h5__cover{
    float: left;
    position: relative;
    width: 85px;
    height: 113px;
    background: #eeece9;
    border: 1px solid #f0f0f0;
    border-radius: 1px;
    overflow: hidden;
  }
  .book-h5 .book-h5__cover img{
    width: 100%;
    height: 100%;
    border-radius: 1px;
  }
  .book-h5 .book-h5__cover .finish{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 6px 7px;
    width: 100%;
    background: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.3));
    font: 10px/10px a;
    color: #fff;
  }
  .book-h5 .book-h5__info{
    margin-left: 100px;
    padding-top: 6px;
    width: 65%;;
    color: rgba(0, 0, 0, 0.9);
  }
  .book-h5 .book-h5__info .name{
    margin-bottom: 4px;
    font: 16px/17px a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .book-h5 .book-h5__info .author{
    margin-top: 8px;
    font: 12px/12px a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .book-h5 .book-h5__info .summary{
    margin-top: 8px;
    font: 12px/12px a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .book-h5 .book-h5__info .book-h5__wrap{
    margin: 10px 0;
    font-size: 0;
  }
  .book-h5 .book-h5__info .book-h5__wrap .tag{
    display: inline-block;
    margin: 0 7px 3px 0;
    padding: 3px 6px 2px;
    max-width: 6em;
    font: 10px/11px a;
    color: #53ac7d;
    border: 1px solid #53ac7d;
    border-radius: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
