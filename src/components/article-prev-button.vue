<template>
  <button @click="onClick" class="hover:text-gray-900 flex items-center text-sm text-gray-600">
    <div class="flex items-center justify-center w-10 h-10 mr-3 bg-white rounded-full shadow-md">
      <svg class="w-3 h-3 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
    </div>
    Forrige 
  </button>
</template>

<script>
export default {
  name: 'ArticlePreviousButton',
  methods: {
    onClick() {
      this.$emit('on-click')
    }
  }
}
</script>