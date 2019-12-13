<!--  -->
<template>
  <div>
      <h2>我是Profile页面</h2>
      <h2>{{$route.query.name}}</h2>
      <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style>
</style>