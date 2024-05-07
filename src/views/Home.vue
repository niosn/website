<template>
  <div class="site">
    <baidu-module></baidu-module>
    <div class="content">
      <div class="clearfix content-top page-width">
        <div class="sidebar fl fl-hack">
          <small-module v-for="(item,index) in siderbarData" :key="index" :data="item"></small-module>
        </div>
        <div class="main ovh">
          <normal-module :data="siteData.head"></normal-module>
          <tool-module></tool-module>
          <div class="cools mod clearfix mt10">
            <div v-for="(group,index) in siteData.main" class="group clearfix" :class="index === 0?'first-group':''" :key="index">
              <large-module style="display: flex;justify-content: space-between;" v-for="(item, idx) in group" :key="idx" :data="item"></large-module>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-module></footer-module>
  </div>
</template>

<script>
import BaiduModule from '../components/baiduModule'
import SmallModule from '../components/smallModule'
import { getDefaultSideData, getSiteData, GetWeiboRealHot } from '@/api/api'
import NormalModule from '../components/NormalModule'
import ToolModule from '../components/ToolModule'
import LargeModule from '../components/LargeModule'
import FooterModule from '../components/footerModule'
import localStore from '../utils/localStore'

export default {
  name: 'Home',
  components: { FooterModule, LargeModule, ToolModule, NormalModule, SmallModule, BaiduModule },
  data() {
    return {
      siteData: {},
      siderbarData: []
    }
  },
  created() {
    getSiteData().then(({ data }) => {
      this.siteData = data
    })
    this.getWeiboData()
    // apiGetHotNews().then(resp => {
    //   debugger
    // })
  },
  mounted() {
    this.intervalHandler = setInterval(this.getWeiboData, 60 * 10 * 1000) // 10分钟
  },
  beforeDestroy() {
    clearInterval(this.intervalHandler)
  },
  methods: {
    getWeiboData() {
      GetWeiboRealHot().then(data => {
        this.siderbarData = data
        localStore.set('wb', data)
      }).catch(() => {
        const storeData = localStore.get('wb')
        if (storeData) {
          this.siderbarData = storeData
          return
        }
        getDefaultSideData().then(({ data }) => {
          this.siderbarData = data
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .site {
  }
</style>
