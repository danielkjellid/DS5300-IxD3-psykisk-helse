<template>
  <div>
    <header class="py-6 border-b border-gray-300">
      <div class="flex items-center justify-between max-w-5xl mx-auto px-5">
        <div>
          <div class="flex items-center">
            <router-link to="/">
              <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.81 9.048l7.333 9.143L11.048 20l-1.81 1.81-7.428 9.142 9.142-7.428L14.476 20l-3.524-3.619L1.81 9.048zm9.619 6.857l3.619 3.524 1.904-1.905-3.523-3.62L.476 2.953 11.43 15.905zm8.062 4.08l-1.953 1.952-1.953-1.952 1.952-1.953 1.954 1.953zm-7.967 4.11L.476 36.952 13.43 26l3.523-3.524-1.904-2-3.524 3.62zM9.048 38.191l9.143-7.334L20 28.952l1.81 1.81 9.238 7.428-7.429-9.142L20 25.524l-3.524 3.524-7.428 9.143zM14 26.57L3.048 39.524 15.905 28.57l3.619-3.619-1.905-1.904L14 26.57zm6.029-6.004l1.953 1.952-1.953 1.953-1.952-1.952 1.952-1.953zm.542 4.385l3.524 3.524 12.953 11.048L26.095 26.57l-3.619-3.523-1.905 1.904zM9.048 1.81l9.143 7.333L20 11.048l1.81-1.81 9.142-7.428-7.428 9.142L20 14.476l-3.619-3.524L9.048 1.81zm4.857 11.619l3.619 3.523 1.905-1.904-3.524-3.62L2.952.477 13.905 13.43zm4.086 4.076l1.954-1.954 1.952 1.953-1.952 1.952-1.954-1.951zm6.104-5.981l-3.619 3.524 2 1.904L26 13.43 36.952.476 24.095 11.524zm14.096-2.476l-7.334 9.143L28.952 20l1.81 1.81 7.428 9.238-9.142-7.429L25.524 20l3.524-3.524 9.143-7.428zM26.57 14L39.524 3.048 28.57 15.905l-3.619 3.619-1.904-2L26.57 14zm-4.058 4.11l1.953 1.952-1.953 1.953-1.952-1.952 1.952-1.953zm2.44 2.461l3.523 3.524 11.048 12.953L26.57 26.095l-3.523-3.619 1.904-1.905z" fill="#161616"/>
              </svg>
            </router-link>
            <nav class="hidden lg:flex text-sm text-gray-700 font-medium">
              <router-link class="ml-8" to="/">Magasinet</router-link>

              <!-- Non-functional links in p tags -->
              <p class="ml-8">Om bladet</p>
              <p class="ml-8">Innsending</p>
              <p class="ml-8">Rådet for psykisk helse</p>
              <p class="ml-8">Nyhetsbrev</p>
              <p class="ml-8">Abonner</p>
            </nav>
          </div>
        </div>
        <button>
          <svg
            class="hidden w-6 h-6 lg:block text-gray-700 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
        <button class="lg:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 18H20M4 6H20H4ZM4 12H20H4Z"
              stroke="#A0AEC0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
       </div>
    </header>
  </div>
  <!-- <div class="lg:flex justify-between items-center">
    <div class="flex items-center justify-between lg:justify-start py-6">
      <button>
        <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.81 9.048l7.333 9.143L11.048 20l-1.81 1.81-7.428 9.142 9.142-7.428L14.476 20l-3.524-3.619L1.81 9.048zm9.619 6.857l3.619 3.524 1.904-1.905-3.523-3.62L.476 2.953 11.43 15.905zm8.062 4.08l-1.953 1.952-1.953-1.952 1.952-1.953 1.954 1.953zm-7.967 4.11L.476 36.952 13.43 26l3.523-3.524-1.904-2-3.524 3.62zM9.048 38.191l9.143-7.334L20 28.952l1.81 1.81 9.238 7.428-7.429-9.142L20 25.524l-3.524 3.524-7.428 9.143zM14 26.57L3.048 39.524 15.905 28.57l3.619-3.619-1.905-1.904L14 26.57zm6.029-6.004l1.953 1.952-1.953 1.953-1.952-1.952 1.952-1.953zm.542 4.385l3.524 3.524 12.953 11.048L26.095 26.57l-3.619-3.523-1.905 1.904zM9.048 1.81l9.143 7.333L20 11.048l1.81-1.81 9.142-7.428-7.428 9.142L20 14.476l-3.619-3.524L9.048 1.81zm4.857 11.619l3.619 3.523 1.905-1.904-3.524-3.62L2.952.477 13.905 13.43zm4.086 4.076l1.954-1.954 1.952 1.953-1.952 1.952-1.954-1.951zm6.104-5.981l-3.619 3.524 2 1.904L26 13.43 36.952.476 24.095 11.524zm14.096-2.476l-7.334 9.143L28.952 20l1.81 1.81 7.428 9.238-9.142-7.429L25.524 20l3.524-3.524 9.143-7.428zM26.57 14L39.524 3.048 28.57 15.905l-3.619 3.619-1.904-2L26.57 14zm-4.058 4.11l1.953 1.952-1.953 1.953-1.952-1.952 1.952-1.953zm2.44 2.461l3.523 3.524 11.048 12.953L26.57 26.095l-3.523-3.619 1.904-1.905z" fill="#161616"/>
        </svg>
      </button>
      <button class="lg:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 18H20M4 6H20H4ZM4 12H20H4Z"
            stroke="#A0AEC0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <ul class="hidden lg:flex ml-8 text-sm text-gray-700 font-medium">
        <li class=""><a href="">Magasinet</a></li>
        <li class="ml-8"><a href="">Om bladet</a></li>
        <li class="ml-8"><a href="">Innsending</a></li>
        <li class="ml-8"><a href="">Rådet for psykisk helse</a></li>
        <li class="ml-8"><a href="">Nyhetsbrev</a></li>
        <li class="mx-8"><a href="">Abonner</a></li>
      </ul>
    </div>
    <div class="">
      <button>
        <svg
          class="hidden w-6 h-6 lg:block text-gray-700 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>
    </div>
  </div> -->
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BaseHeader',
  components: {},
}
</script>
