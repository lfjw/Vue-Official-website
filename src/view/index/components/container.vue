<template>
  <div>

    <div class="container">
      <div class="section">
        <!--   Icon Section   -->
        <div class="row">
          <div class="col s12 m4" v-for='d in item_con'>
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">{{d.icon_text}}</i></h2>
              <h5 class="center">{{d.title}}</h5>
              <p class="light">{{d.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    item_con: {
      type: Array,
      default: [],
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