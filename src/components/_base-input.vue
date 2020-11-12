<template>
  <div :class="showFilter ? 'flex items-center justify-between' : 'w-full'">
    <div :class="{'mr-1' : showFilter}">
        <label for="search" class="sr-only">Search</label>
        <div class="relative rounded-md">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <!-- emits inputted text to parent component, which then filters the searched list -->
          <input @input="updateQuery" id="search" class="block w-full pl-10 text-sm text-gray-700 border border-gray-300 rounded-md form-input" placeholder="Søk etter artikler, temaer..." />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    query: {
      type: String,
      required: false,
    },
    showFilter: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    // emit changes to the input event to parent component
    updateQuery(e) {
      this.$emit('update:query', e.target.value)
    }
  }
}
</script>