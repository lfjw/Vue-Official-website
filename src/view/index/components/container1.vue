<template>

  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
          <h5 class="header col s12 light">{{item_con1.title}}</h5>
        </div>
      </div>
    </div>
    <div class="parallax"><img :src="item_con1.img" alt="Unsplashed background img 2"></div>
  </div>

</template>

<script>
export default {
  props: {
    item_con1: {
      type: Object,
      default: {},
    }
  },
  data () {
    return {
      
    }
  },

  
}
</script>

<style scoped lang="scss">

</style>