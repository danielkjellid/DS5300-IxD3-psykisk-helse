<template>
  <component 
    :is="type" 
    v-on="$listeners"
    :to="to"
    :class="[{ 'w-full block text-center': block }, renderClasses]"
  >
    <slot>Button</slot>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      required: false,
      default: null
    },
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    light: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    // set the button as <button> or <router-link> dependant on props passed
    type() {
      if (this.to) {
        return 'router-link'
      } else {
        return 'button'
      }
    },
    renderClasses() {
      if (this.light) return 'text-sm font-medium leading-5  rounded-md px-4 py-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:border-gray-400 focus:shaow-outline-gray active:bg-gray-100 active:border-gray-400'

      return 'bg-ps-orange hover:text-ps-orange hover:bg-transparent hover:border hover:border-ps-orange px-4 py-2 text-sm font-medium leading-5 text-white border border-transparent rounded-md'
    }
  },
}
</script>

<style>

</style>