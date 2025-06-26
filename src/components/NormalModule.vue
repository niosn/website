<template>
  <div class="sites mod mt10">
    <ul class="clearfix">
      <li class="fl site" v-for="(item,index) in data.list" :key="index">
        <template v-if="Array.isArray(item)">
          <template v-for="(itm, idx) in item" :key="idx">
            <template v-if="idx!=0">&nbsp;&#8226;&nbsp;</template>
            <a target="_blank" class="clr-black" :href="itm.url">{{ itm.title }}</a>
          </template>
        </template>
        <template v-else>
          <a target="_blank" class="clr-black" :href="item.url">{{ item.title }}</a>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NormalModule',
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
