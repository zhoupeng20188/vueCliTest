<!--  -->
<template>
  <div>
      <h2>我是用户页面</h2>
      <p>我接收到了路由的值{{userId}}</p>
      <p>直接拿值{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
      userId(){
          return this.$route.params.userId
      } 
  },

  methods: {}
}

</script>
<style>
</style>