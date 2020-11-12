<template>
  <div class="home">
    <BaseInput class="pt-10"/>
    <BaseCategoryBtn class="pt-2" />
    <div class="text-center w-2/3 mx-auto my-10">
      <h1 class="text-gray-800 font-extrabold text-3xl">Forsiden</h1>
      <p class="text-gray-600 font-normal text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium sit earum culpa commodi suscipit! Est!</p>
    </div>
    <ArticleList :articles="articles" :smallList="false" class="pb-10" />
    <div class="flex items-center justify-center w-full h-56 mb-10 bg-gray-200 rounded-lg uppercase">
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

  data: () => ({
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
        ]
    })
}
</script>
