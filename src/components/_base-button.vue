<template>
  <component 
    :is="type" 
    v-on="$listeners"
    :to="to"
    class="bg-ps-orange hover:text-ps-orange hover:bg-transparent hover:border hover:border-ps-orange px-4 py-2 text-sm font-medium leading-5 text-white border border-transparent rounded-md"
    :class="{ 'w-full block text-center': block }"
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
  },
}
</script>

<style>

</style>