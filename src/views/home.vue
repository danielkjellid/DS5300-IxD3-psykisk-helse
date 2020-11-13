<template>
  <div class="home max-w-5xl px-5 mx-auto">
    <BaseInput label="search" hiddenLabel v-model="query" class="pt-10" block :icon="true" />
    <BaseCategoryBtn class="pt-2" />
    <div class="text-center w-2/3 mx-auto my-10">
      <h1 class="text-gray-800 font-extrabold text-3xl"> {{title}} </h1>
      <p class="text-gray-600 font-normal text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium sit earum culpa commodi suscipit! Est!</p>
    </div>
    <ArticleList :articles="focusArticles" :smallList="false" :smallCard="false" class="pb-10" />
    <div class="flex items-center justify-center w-full h-56 mb-10 bg-gray-200 rounded-lg uppercase">
      Reklame
    </div>
    <ArticleList :articles="articles" :smallList="true" :smallCard="true" />
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
        focusArticles: [
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
                category: 'Tema',
                title: 'Kameratskap mot traumene',
                text: 'Hjemme på «gutterommet» hos Freddy Bolle (t.h.) står kaffen alltid klar om kameraten Per Willy Bårdsen trenger en prat. Bårdsen har PTSD etter…',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            },
            {
                id: 3,
                imageUrl: 'https://source.unsplash.com/random',
                category: 'Meninger',
                title: 'Depresjon med rød nese',
                text: '– Den røde nesen er symbol på lek og naivitet. Jeg synes klovner er så fulle av poesi, sier Knut Østrådal.',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            },
  
        ],
        articles: [
            {
                id: 1,
                imageUrl: 'https://source.unsplash.com/random',
                category: 'Livet',
                title: 'Tabupris til "livvakt"',
                text: 'Ingebjørg Blindheim (22) ble kjent som «livvakt» gjennom NRK-serien Trigger Warning, der hun varslet om jenter på Instagram som sto i fare for å ta…',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            },
            {
                id: 2,
                imageUrl: 'https://source.unsplash.com/random',
                category: 'Livet',
                title: 'Spør oss: Fra frivillig til trang',
                text: '–Kan jeg risikere å bli tvangsinnlagt hvis jeg selv ber om å bli innlagt?',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            },
            {
                id: 3,
                imageUrl: 'https://source.unsplash.com/random',
                category: 'Tema',
                title: 'Håp på internett',
                text: 'Vi vet at internett er stort, tidvis mørkt og på mange måter et spindelvev man fort kan hekte seg fast i. Ungdom i dag lever livene sine delvis via…',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            },
            {
                id: 4,
                imageUrl: 'https://source.unsplash.com/random',
                category: 'Kultur',
                title: 'Traumetrigger-vår',
                text: 'Våren er vanligvis en tid for glede, for nytt liv, for blomstring og fellesskap. Slik ble det ikke denne våren.',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            },
            {
                id: 5,
                imageUrl: 'https://source.unsplash.com/random',
                category: 'Livet',
                title: 'Lesernes ord om isolasjon',
                text: 'Vi spurte leserne om hvordan de opplevde nedstengningen av Norge. Her er noen av svarene vi fikk.',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            },
            {
                id: 6,
                imageUrl: 'https://source.unsplash.com/random',
                category: 'Livet',
                title: '"Hodepine"',
                text: 'Underlivet var sentralt da Ane Barstad Solvang laget tegneserie­romanen Frykt og medlidenhet for to år siden. Det er det også nå, i hennes første…',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            },
            {
                id: 7,
                imageUrl: 'https://source.unsplash.com/random',
                category: 'Kultur',
                title: '- Penselen er min stemme',
                text: '– Det er viktig å kunne uttrykke seg på flere måter enn med ord, sier Ann-Karin Gulaker.',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            },
            {
                id: 8,
                imageUrl: 'https://source.unsplash.com/random',
                category: 'Tema',
                title: 'Til dobørsten skiller oss ad',
                text: 'Skittentøykurven skal gjemmes.',
                authorAvatarUrl: 'https://source.unsplash.com/random',
                authorName: 'Liz Buer',
                datePublished: 'Mar 16, 2020',
                readTime: '6 min'
            }
        ],
    }),
    computed: {
      
    }
}
</script>
