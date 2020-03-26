<!--  -->
<template>
  <div>
      <h2>我是流程引擎页面</h2>
      {{data}}
  </div>
</template>


<script>

import axios from 'axios';

import {request} from "../network/request"
import {request2} from "../network/request"


export default {
  data () {
    
    return {
      data: []
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