<template>
  <div class="flex justify-between lg:justify-start items-center">
    <img src="../assets/PH-Logo.svg" alt="">
    <button class="lg:hidden">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 18H20M4 6H20H4ZM4 12H20H4Z" stroke="#A0AEC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <ul class="hidden lg:flex ml-5 text-gray-700 text-sm">
      <li class=""><a href="">Magasinet</a></li>
      <li class="ml-4"><a href="">Om bladet</a></li>
      <li class="ml-4"><a href="">Innsending</a></li>
      <li class="ml-4"><a href="">Rådet for psykisk helse</a></li>
      <li class="ml-4"><a href="">Nyhetsbrev</a></li>
      <li class="mx-4"><a href="">Abonner</a></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BaseHeader',
  components: {
    
  }
}
</script>