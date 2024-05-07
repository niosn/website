<template>
  <div>
    <span class="fl">
      <a target="_blank" class="clr-blue" :href="data.url">{{ data.title }}</a>
    </span>

    <span class="site" v-for="(item,index) in data.list" :key="index">
      <a target="_blank" class="icon clr-black" :href="item.url">{{ item.title }}</a>
    </span>

    <span class="more">
      <a target="_blank" class="clr-blue" :href="data.url">更多&gt;&gt;</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LargeModule',
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
