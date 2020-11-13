<template>
  <div :class="{ 'w-full': block }">
    <label :for="id" :class="{ 'sr-only' : hiddenLabel, 'mb-1' : label }" class="block text-sm font-medium leading-5 text-gray-700">{{ label }}</label>
    <div class="relative rounded-md">
      <div v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        @input="$emit('input', $event.target.value)" 
        :id="id"
        :value="value"
        :class="{ 
          'pl-10': icon, 
          'w-full': block,
        }"
        :placeholder="placeholder"
        :type="type"
        class="form-input block text-sm leading-5" 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    // controls the for and id fields in input and label
    id: {
      type: String,
      required: false,
      default: 'input'
    },
    // sets label to screen reader only
    hiddenLabel: { 
      type: Boolean,
      required: false,
      default: false,
    },
    // sets the label itself
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    // decides wether an input should have an icon by defined icon name
    icon: {
      type: Boolean,
      required: false,
      default: false
    },
    // expands input to 100% av available space
    block: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>