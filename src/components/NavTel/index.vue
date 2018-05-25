<template>
  <div>
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">导航条</a></li>
        </ul>
        <ul id="nav-mobile" class="side-nav">
          <li><a href="#">导航条</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavTel',
  data () {
    return { 
    }
  },
  methods: {
  },
  mounted() {
    $('.button-collapse').sideNav()
  },
  created() {
      
  }
}
</script>

<style scoped lang="scss">
</style>
