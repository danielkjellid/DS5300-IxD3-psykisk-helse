<template>
  <div class="home">


    <!-- make use of the global components
    notice how its not imported/registered -->
    <BaseTest />


    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/hello-world.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
