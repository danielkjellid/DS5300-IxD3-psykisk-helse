<template>
  <div class="home max-w-5xl px-5 mx-auto">
    <div class="md:w-2/3 w-full mx-auto mt-10 text-center">
      <h1 class="text-3xl font-extrabold text-gray-800"> Forsiden </h1>
      <p class="text-md font-normal text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium sit earum culpa commodi suscipit! Est!</p>
    </div>
    <BaseInput label="search" hiddenLabel v-model="query" class="my-10" block :icon="true" placeholder="Søk etter artikler" />
    <div>
      <h2 class="pb-3 text-base font-semibold text-center text-gray-700">Fremhevede artikler</h2>
      <ArticleList :articles="filteredFocusArticles" :smallList="false" :smallCard="false" class="pb-10" />
    </div>
    <div class="flex items-center justify-center w-full h-56 mb-10 uppercase bg-gray-200 rounded-lg">
      Reklame
    </div>
    <ArticleList :articles="filteredArticles" :smallList="true" :smallCard="true" class="pb-10" />
    <SubscribeBox class="mb-10" />
  </div>

</template>


<script>
import ArticleList from '@/components/article-list.vue'
import SubscribeBox from '@/components/subscribe-box.vue'

export default {
  name: 'Home',
  components: {
    ArticleList,
    SubscribeBox
  },
  computed: {
    filteredFocusArticles() {
      return this.focusArticles.filter(article => {
        return article.title.toLowerCase().match(this.query.toLowerCase())
      })
    },
    filteredArticles() {
      return this.articles.filter(article => {
        return article.title.toLowerCase().match(this.query.toLowerCase())
      })
    }
  },
  data: () => ({
    query: '',
    focusArticles: [
      {
        id: 1,
        imageUrl: 'https://source.unsplash.com/random',
        category: 'Livet',
        title: 'Opplevde at jeg ble kastet ut',
        text: 'Flere tidligere pasienter har klaget til Hurdalssjøen Recoverysenter inn til Fylkesmannen for dårlig behandling. Lene K. Apeland er en av klagerne.',
        authorAvatarUrl: '../assets/avatar.png',
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
        slug: 'tabupris-til-livvakt',
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
}
</script>
