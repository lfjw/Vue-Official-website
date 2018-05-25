

<template>
  <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>{{center_obj.title}}</h4>
          <p class="left-align light">{{center_obj.text}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    center_obj: {
      type: Object,
      default: {},
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">

</style>