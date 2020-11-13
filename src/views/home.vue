<template>
  <div class="home max-w-5xl px-5 mx-auto">
    <BaseInput label="search" hiddenLabel v-model="query" class="pt-10" block :icon="true" />
    <BaseCategoryBtn class="pt-2" />
    <div class="w-2/3 mx-auto my-10 text-center">
      <h1 class="text-3xl font-extrabold text-gray-800">Forsiden</h1>
      <p class="text-md font-normal text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium sit earum culpa commodi suscipit! Est!</p>
    </div>
    <ArticleList :articles="articles" :smallList="false" class="pb-10" />
    <div class="flex items-center justify-center w-full h-56 mb-10 uppercase bg-gray-200 rounded-lg">
      Reklame
    </div>
    <ArticleList :articles="articles" :smallList="true" />
    <!-- make use of the global components
    notice how its not imported/registered -->
   
  </div>
  
</template>


<script>
// @ is an alias to /src
import ArticleList from '@/components/article-list.vue'

export default {
  name: 'Home',
  components: {
    ArticleList
  },
  props: {

  },

  data() {
    return {
      articles: [
          {
              id: 1,
              imageUrl: 'https://source.unsplash.com/random',
              category: 'Livet',
              title: 'Opplevde at jeg ble kastet ut',
              text: 'Flere tidligere pasienter har klaget til Hurdalssjøen Recoverysenter inn til Fylkesmannen for dårlig behandling. Lene K. Apeland er en av klagerne.',
              authorAvatarUrl: 'https://source.unsplash.com/random',
              authorName: 'Liz Buer',
              datePublished: 'Mar 16, 2020',
              readTime: '6 min'
          },
          {
              id: 2,
              imageUrl: 'https://source.unsplash.com/random',
              category: 'Livet',
              title: 'Opplevde at jeg ble kastet ut',
              text: 'Flere tidligere pasienter har klaget til Hurdalssjøen Recoverysenter inn til Fylkesmannen for dårlig behandling. Lene K. Apeland er en av klagerne.',
              authorAvatarUrl: 'https://source.unsplash.com/random',
              authorName: 'Liz Buer',
              datePublished: 'Mar 16, 2020',
              readTime: '6 min'
          },
          {
              id: 3,
              imageUrl: 'https://source.unsplash.com/random',
              category: 'Livet',
              title: 'Opplevde at jeg ble kastet ut',
              text: 'Flere tidligere pasienter har klaget til Hurdalssjøen Recoverysenter inn til Fylkesmannen for dårlig behandling. Lene K. Apeland er en av klagerne.',
              authorAvatarUrl: 'https://source.unsplash.com/random',
              authorName: 'Liz Buer',
              datePublished: 'Mar 16, 2020',
              readTime: '6 min'
          }
      ],
      query: '',
    }
  },
}
</script>
