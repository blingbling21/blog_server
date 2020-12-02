<template>
  <div id='index'>
    <div class="article" @click="toArticle">添加文章</div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Index extends Vue {
  toArticle(){
    this.$router.push({name: 'article'})
  }
}
</script>

<style lang='less'>
#index {
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 100px auto;
  .article {
    text-align: center;
    line-height: 100px;
    width: 100px;
    height: 100px;
    box-shadow: 1px 1px 3px #cccccc;
    border-radius: 10px;
    transition: all .3s;
    &:hover {
      cursor: pointer;
      box-shadow: 1px 1px 10px #cccccc;
    }
  }
}
</style>