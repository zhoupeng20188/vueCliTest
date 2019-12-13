<!--  -->
<template>
  <div>
      <h2>我是Home页</h2>
      <router-link to='/home/news'>新闻</router-link>
      <router-link to='/home/message'>消息</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
        path: '/home/news'
    };
  },
  created() {
      console.log('home created')
  },

  destroyed() {
      console.log('home destoryed')
  },
  activated(){
    // 只有在使用了keep-alive时才会生效
    console.log('activated' + this.path)
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave' + this.$route.path)
      this.path = this.$route.path
      next()
  },

  components: {},

  computed: {},

//   mounted: {},

  methods: {}
}

</script>
<style>
</style>