<template>
  <div class="real mod mt10">
    <div class="hd pstr">
      <h3 class="hd-title">
        <a target="_blank" :href="data.url" class="clr-blue">{{ data.title }}</a>
      </h3>
    </div>
    <ul class="bd clearfix">
      <li class="fl search" v-for="(item,index) in data.list" :key="index">
        &#8226;<a target="_blank" class="clr-black" :href="item.url" :title="item.title">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SmallModule',
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
        title: '',
        url: '',
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
