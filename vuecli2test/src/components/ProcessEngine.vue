<!--  -->
<template>
  <div>
      <h2>我是流程引擎页面</h2>
  </div>
</template>


<script>

import axios from 'axios';


export default {
  data () {
    return {
    };
  },
  created() {
    axios({
      url:'localhost:8101/task/list',
      params:{
        "pageNum":1,
        "pageSize":10
      }
    }).then((data)=>{
      console.lon(data)
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