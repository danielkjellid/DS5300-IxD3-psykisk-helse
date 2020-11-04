<template>
  <div class="home">


    <!-- make use of the global components
    notice how its not imported/registered -->
    <BaseTest />

    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox text-pink-600" checked>
        <span class="ml-2">Option 3</span>
      </label>
    </div>

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
