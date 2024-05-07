<template>
  <div class="smzdm">
    <div v-for="(item,index) in articleList" class="article" :key="index">
      <template v-if="isworthy(item)">
        <span class="article-date">{{ item.article_date }}</span>
        <a target="_blank" class="article-price" :href="item.article_url">{{ item.article_title }}({{ item.article_price }})</a>
        <span class="article-val">值：{{ worthy(item) }}</span>
        <span class="article-com">评论数：{{ item.article_comment }}</span>
        <br>
      </template>
    </div>
    <p class="load-more" @click="loadData">加载更多</p>
  </div>
</template>

<script>
import { getSMZDMData } from '../api/api'

export default {
  name: 'Smzdm',
  data() {
    return {
      articleList: [],
      page: 1
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      getSMZDMData(this.page).then(data => {
        this.page++
        this.articleList = this.articleList.concat(data)
        if (this.articleList.length < 50) {
          setTimeout(this.loadData, 2000)
        }
      })
    },
    worthy(item) {
      const worthy = parseInt(item.article_worthy)
      const unworthy = parseInt(item.article_unworthy)
      if (unworthy === 0) {
        return worthy + '/' + unworthy
      } else {
        const val = worthy * 100 / (worthy + unworthy)
        return val.toFixed(2) + '%'
      }
    },
    isworthy(item) {
      if (item.article_date && item.article_date.length > 5) return false
      const worthy = parseInt(item.article_worthy)
      const unworthy = parseInt(item.article_unworthy)
      if (unworthy === 0 && worthy > 10) {
        return true
      }
      const val = worthy / (worthy + unworthy)
      return (val > 0.7 && parseInt(item.article_comment) > 10)
    }
  }
}
</script>

<style scoped lang="scss">
.smzdm {
  font-size: 16px;
  .article {
    line-height: 32px;
    .article-date {
      color: #333333;
      width: 100px;
      display: inline-block;
    }
    .article-price{
      color: #186cdf;
      margin: 0 12px;
    }
    .article-val{
      color: #ff5500;
      margin: 0 12px;
    }
    .article-com{
      color: #528cdb;
      margin: 0 12px;
    }
  }
  .load-more {
    text-align: center;
    cursor: pointer;
    border: solid 1px #999999;
    line-height: 32px;
  }
}
</style>
