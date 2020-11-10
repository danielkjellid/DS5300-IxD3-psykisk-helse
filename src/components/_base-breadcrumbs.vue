<template>
  <div>
    <nav class="lg:hidden">
      <router-link to="/" class="hover:text-gray-600 flex items-center text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out">
        <svg class="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        Tilbake til magasinet
      </router-link>
    </nav>
    <nav class="lg:flex items-center hidden text-sm font-medium leading-5">
      <div v-for="(breadcrumb, index) in data" :key="index" class="flex items-center">
        <template v-if="!breadcrumb.disabled">
          <router-link :to="breadcrumb.href" class="hover:text-gray-600 text-gray-900 transition duration-150 ease-in-out">
            {{ breadcrumb.text }}
          </router-link>
          <svg class="flex-shrink-0 w-5 h-5 mx-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </template>
        <template v-else>
          <span class="text-gray-500">{{ breadcrumb.text }}</span>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BaseBreadcrumbs',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>