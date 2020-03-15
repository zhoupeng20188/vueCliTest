<!--  -->

<template>
  <div>
      <h2>我是Home页</h2>
      <router-link to='/home/news'>新闻</router-link>
      <router-link to='/home/message'>消息</router-link>
      <div> vuex state测试：{{$store.state.count}}</div>
      <div> modules里的state测试：{{$store.state.a.name}}</div>
      <button @click="plus">同步+</button>
      <button @click="sub">同步-</button>
      <button @click="plusByAction">异步+</button>
      <button @click="subByAction">异步-</button>
      <router-view></router-view>
  </div>
</template>

<script>

import { UPDATE_COUNT } from '../store/vuex-types';

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

  methods: {
    plus(){
      this.$store.commit(UPDATE_COUNT,this.$store.state.count+1)
    },
    sub(){
      this.$store.commit(UPDATE_COUNT,this.$store.state.count-1)
    },
    plusByAction(){
      this.$store.dispatch('updateByAction',this.$store.state.count+1).then((data)=>{
        console.log("action里已完成！我拿到了action里的值" + data)
      })
    },
    subByAction(){
      this.$store.dispatch('updateByAction',this.$store.state.count-1)
    }
  }
}

</script>
<style>
</style>