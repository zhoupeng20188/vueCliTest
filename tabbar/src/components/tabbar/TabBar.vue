<!--  -->
<template>
  <div id="tab-bar">
    <!-- <slot></slot> -->
    <tab-bar-item>
        <img slot="slot-icon" src="@/assets/img/tabbar/home.svg" />
        <img slot="slot-icon-active" src="@/assets/img/tabbar/home-red.svg" />
        <div slot="slot-text">首页</div>
      </tab-bar-item>
            <tab-bar-item>
        <img slot="slot-icon" src="@/assets/img/tabbar/home.svg" />
        <img slot="slot-icon-active" src="@/assets/img/tabbar/home-red.svg" />
        <div slot="slot-text">分类</div>
      </tab-bar-item>
            <tab-bar-item>
        <img slot="slot-icon" src="@/assets/img/tabbar/home.svg" />
        <img slot="slot-icon-active" src="@/assets/img/tabbar/home-red.svg" />
        <div slot="slot-text">购物车</div>
      </tab-bar-item>
            <tab-bar-item>
        <img slot="slot-icon" src="@/assets/img/tabbar/contacts.svg" />
        <img slot="slot-icon-active" src="@/assets/img/tabbar/contacts-red.svg" />
        <div slot="slot-text">我的</div>
      </tab-bar-item>
</div>
</template>

<script>
import TabBarItem from "@/components/tabbar/TabBarItem"
export default {
  data () {
    return {
    };
  },

  components: {
      TabBarItem
  },

  computed: {},

  methods: {}
}

</script>
<style>
  @import "../../assets/css/base.css";

  #tab-bar {
    display: flex; /**横向显示*/
    background-color: #f6f6f6;

    /**显示在最下面 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /**阴影 */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2)
  }

  
</style>