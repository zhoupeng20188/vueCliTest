<template>
  <div id="app">
    <!-- router-link里加上replace属性，浏览器的返回不能使用 -->
    <router-link to='/home' tag='button'>首页</router-link>
    <router-link to='/about'>关于</router-link>
    <!-- 动态路由 -->
    <router-link :to="'/user/' + userId">用户</router-link>
    <router-link :to="{path: '/profile', query:{name:'23423',age: 18}}">Profile</router-link>
    <router-link to='/processEngine'>流程引擎</router-link>
    <button @click='btnClick'>按钮跳转Home</button>
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

import {
  UPDATE_COUNT
} from './store/vuex-types'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      userId: 1
    }
  },
  methods: {
    btnClick(){
      // 用$router修改路径
      this.$router.push('/home')
      // 用replace则没有返回
      // this.$router.replace('/home')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  background-color: red
}
</style>
