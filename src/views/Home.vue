<template>

  <div class="home">
    <Navbar />
    <Welcome />
  </div>

</template>

<script>

  import Navbar from '../components/layout/Navbar'
  import Welcome from '../components/layout/Welcome'

  export default {
    name: 'Home',
    components: {
      Navbar,
      Welcome
    }
  };

</script>

<style>

</style>
