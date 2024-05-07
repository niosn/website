<template>
  <div class="tools mod clearfix mt10">
    <h3 class="title fl fl-hack">实用工具</h3>
    <ul class="bd clearfix ovh">
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url('static/image/weather160303.png')"
           href="https://tianqi.2345.com/Pc">天气预报</a>
      </li>
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url(static/image/ditu160303.png)"
           href="http://www.nmc.cn/publish/satellite/fy2.htm">卫星云图</a>
      </li>
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url(static/image/flight160303.png)"
           href="http://www.12306.cn/">火车票</a>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
        <a target="_blank" class="clr-blue" href="http://lvyou.hao123.com/air">机票</a>
      </li>
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url(static/image/waihui160303.png)"
           href="http://www.boc.cn/sourcedb/whpj/">外汇牌价</a>
      </li>
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url(static/image/gupiao160303.png)"
           href="http://www.hao123.com/stocknew">股票</a>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
        <a target="_blank" class="clr-blue" href="http://www.hao123.com/licai">理财</a>
      </li>
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url(static/image/wannianli160303.png)"
           href="http://www.hao123.com/rili">万年历</a>
      </li>
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url(static/image/xingzuo160303.png)"
           href="http://www.hao123.com/xingzuonew.html">星座运程</a>
      </li>
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url(static/image/kuaidi160303.png)"
           href="http://life.hao123.com/">实用查询</a>
      </li>
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url(static/image/fanyi160303.png)"
           href="https://www.hao123.com/haoxue">学习 </a>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
        <a target="_blank" class="clr-blue" href="http://www.hao123.com/exam">考试</a>
      </li>
      <li class="fl site">
        <a target="_blank" class="icon clr-blue" style="background-image:url(static/image/caipiao160303.png)"
           href="http://caipiao.hao123.com/">彩票</a>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;
        <a target="_blank" class="clr-blue"
           href="https://www.baidu.com/s?word=%E5%8F%8C%E8%89%B2%E7%90%83&ie=utf-8">双色球</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ToolModule',
  props: {
    data: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      test: {
        list: [
          {
            title: '',
            url: ''
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
