<template>
  <div id="header" class="clearfix">
    <a class="fl logo" onclick="javascript:;" href="javascript:;">
      <!--<img width="137" height="46" alt="" src="../assets/image/logo.6456fa5.gif">-->
      <img width="137" height="46" style="border-radius: 4px; object-fit: cover;" alt="" src="https://img.xjh.me/random_img.php?type=bg&ctype=acg&return=302">
    </a>
    <div class="header-main">
      <div class="clearfix">
        <div class="fl fl-hack search-box">
          <div class="search-tab">
            <a class="cur" target="_blank" data-tab="web" href="https://www.baidu.com/">网页</a>
            <a target="_blank" data-tab="news" href="http://news.baidu.com/">新闻</a>
            <a target="_blank" data-tab="tieba" href="http://tieba.baidu.com/">贴吧</a>
            <a target="_blank" data-tab="zhidao" href="http://zhidao.baidu.com/">知道</a>
            <a target="_blank" data-tab="music" href="http://music.baidu.com/">音乐</a>
            <a target="_blank" data-tab="image" href="http://image.baidu.com/">图片</a>
            <a target="_blank" data-tab="video" href="http://video.baidu.com/">视频</a>
            <a target="_blank" data-tab="map" href="http://map.baidu.com/">地图</a>
            <a target="_blank" data-tab="wenku" href="http://wenku.baidu.com/">文库</a>
            <a target="_blank" href="http://www.baidu.com/more/" class="more">更多&gt;&gt;</a>
          </div>
          <div class="search-form">
            <form ref="form" class="clearfix" id="searchForm" target="_blank" method="get" action="https://www.baidu.com/s">
              <div class="fl pstr">
                <input v-model="keywords" name="word" maxlength="100" id="word"
                       autocomplete="off" class="search-input" @input="showSuggestData" @focus="reshowSuggest"
                       @blur="hideSuggest" @keydown.down="downSelect" @keydown.up="upSelect" @mouseover="searchMouseOver">
                <div id="sug" v-if="showSuggest">
                  <ul>
                    <li v-for="(item,index) in suggestData" :key="index" :class="item.class" @click="sugItemSelected(item.q)"
                        @mouseover="blurFlag=false" @mouseout="blurFlag=true">
                      {{ item.q }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="fl search-btn-wrap">
                <input type="button" class="search-btn" value="百度一下" @click="onSubmit('baidu')">
              </div>
              <div class="fl search-btn-wrap" style="margin-left: 2px;">
                <input type="button" class="search-btn" value="Google一下" @click="onSubmit('google')">
              </div>
              <div class="fl search-btn-wrap" style="margin-left: 2px;">
                <input type="button" class="search-btn" value="Bing一下" @click="onSubmit('bing')">
              </div>
              <input type="hidden" value="50000041_hao_pg" name="tn" id="tn">
              <input type="hidden" value="utf-8" name="ie">
            </form>
          </div>
        </div>
        <div class="hot-words ovh">
          <div class="slider">
            <span class="dot"></span>
            <a href="javascript:;" class="next" data-slider="controller-next"></a>
          </div>
        </div>
      </div>
    </div>
    <!--    <a href="http://192.168.0.94:3000/" class="to-old clr-blue">系统一览</a>-->
    <!--    <a target="_blank" href="#/smzdm" class="to-old clr-blue" style="right: 97px;">SMZDM</a>-->
  </div>
</template>

<script>
import { querySuggestData } from '@/api/api'

export default {
  name: 'BaiduModule',
  data() {
    return {
      keywords: '',
      preKeywords: '',
      showSuggest: false,
      suggestData: [],
      sugSelectIndex: -1,
      blurFlag: true,
      searchType: {
        baidu: 'https://www.baidu.com/s?word=',
        google: 'https://www.google.com/search?q=',
        bing: 'https://www.bing.com/search?q='
      }
    }
  },
  mounted() {
    document.body.onclick = function() {
      this.showSuggest = false
    }
  },
  methods: {
    onSubmit(type) {
      const url = this.searchType[type] + this.keywords
      window.open(url)
    },
    showSuggestData() {
      this.sugSelectIndex = -1
      this.preKeywords = this.keywords
      querySuggestData(this.keywords).then(data => {
        if (!data.g) {
          this.showSuggest = false
          return
        }
        this.suggestData = data.g
        this.showSuggest = true
      })
    },
    sugItemSelected(key) {
      this.keywords = key
      this.showSuggest = false
      this.$nextTick(() => {
        document.getElementById('searchForm').submit()
      })
    },
    reshowSuggest() {
      if (!this.keywords) {
        this.suggestData = []
        return
      }
      if (this.suggestData.length > 0) {
        this.showSuggest = true
      }
    },
    hideSuggest() {
      if (!this.blurFlag) return
      this.showSuggest = false
    },
    downSelect() {
      if (!this.showSuggest || this.suggestData.length === 0) return
      if (this.sugSelectIndex === -1) {
        this.sugSelectIndex++
        this.setSuggestSelect(this.sugSelectIndex)
      } else if ((this.sugSelectIndex + 1) >= this.suggestData.length) {
        this.setSuggestUnSelect(this.sugSelectIndex)
        this.sugSelectIndex = 0
        this.setSuggestSelect(this.sugSelectIndex)
      } else {
        this.setSuggestUnSelect(this.sugSelectIndex)
        this.sugSelectIndex++
        this.setSuggestSelect(this.sugSelectIndex)
      }
    },
    upSelect() {
      if (!this.showSuggest || this.suggestData.length === 0) return
      if (this.sugSelectIndex === -1) {
        this.keywords = this.preKeywords
        this.sugSelectIndex = this.suggestData.length - 1
        this.setSuggestSelect(this.sugSelectIndex)
      } else {
        this.setSuggestUnSelect(this.sugSelectIndex)
        this.sugSelectIndex--
        this.setSuggestSelect(this.sugSelectIndex)
      }
    },
    setSuggestSelect(index) {
      this.keywords = this.suggestData[index].q
      this.$set(this.suggestData[index], 'class', 'cur')
    },
    setSuggestUnSelect(index) {
      this.$set(this.suggestData[index], 'class', '')
    },
    searchMouseOver(e) {
      e.currentTarget.select()
    }
  }
}
</script>

<style scoped>

</style>
