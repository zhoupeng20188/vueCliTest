<!--  -->
<template>
  <div>
      <h2>我是流程引擎页面</h2>
      <h2>流程列表接口</h2>
      {{data}}
      <h2>待办任务</h2>
      {{data2}}
      <button @click="complete()">完成任务</button>
  </div>
</template>


<script>

import axios from 'axios';

import {request} from "../network/request"
import {request2} from "../network/request"


export default {
  data () {
    
    return {
      data: [],
      data2: []
    };
  },
  created() {
    // request({
    //   // "url":"/process/definition/list"
    //   url:"/test123?a=1"
    // }).then((data)=>{
    //   data = data
    //   console.log(data)
    // }).catch((err)=>{
    //   console.log(err)
    // })
    request2({
      url:"/process/definition/list"
    }).then((res)=>{
      this.data = res
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

    request2({
      url:"/task/todo/list",
      method: 'get'
    }).then((res)=>{
      this.data2 = res
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

    
  },
  components: {},

  computed: {
      userId(){
          return this.$route.params.userId
      } 
  },

  methods: {
    complete() {
    request2({
      url:"/task/complete",
      method: 'post',
      data: {
        "taskId": "ce4b7fb0-6f07-11ea-b1d3-1c1b0d7b318e"
      }
    }).then((res)=>{
      this.data2 = res
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    }
  }
}

</script>
<style>
</style>