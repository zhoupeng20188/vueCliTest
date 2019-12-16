<!--  -->
<template>
  <div class="tar-bar-item" @click="itemClick">
    <!-- <img src="@/assets/img/tabbar/40145.gif" alt="" />
    <div>首页</div> -->
    <div v-if="!isActive"><slot name="slot-icon"></slot></div>
    <div v-else><slot name="slot-icon-active"></slot></div>
    <!-- <div :class="{active:isActive}"><slot name="slot-text"></slot></div> -->
    <div :style="activeStyle"><slot name="slot-text"></slot></div>
    
  </div>
</template>

<script>
export default {
  //放在与data同级
  props: {
        path: String,
        activeColor:{
            type: String,
            default: "red"
        }
    },
  data () {
    return {
        // isActive: false
    };
  },

  components: {},

  computed: {
      isActive() {
          // this.$route.path可以取得当前跳转的path
          // 动态决定是否是active
          return this.$route.path.indexOf(this.path) !== -1 
      },
      activeStyle() {
          return this.isActive ? {color: this.activeColor} : {}
      }
  },

  methods: {
      itemClick() {
          this.$router.replace(this.path)
        // console.log(this.path)
      }
  }
}

</script>
<style>
.tar-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tar-bar-item img {
      height: 24px;
      width: 24px;
  }
  /* .active {
      color: red;
  } */
</style>