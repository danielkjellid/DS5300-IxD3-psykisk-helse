<template>
  <div class="lg:border-l lg:border-r lg:border-gray-300 relative max-w-4xl"> 
    <div class="md:px-6 px-4 py-5">
      <!-- breadcrumbs -->
      <BaseBreadcrumbs :data="breadcrumbs" />

      <!-- previous and next article buttons for larger screens -->
      <div class="lg:block hidden">
        <ArticlePreviousButton class="absolute top-0 left-0 mt-20 -ml-4" @on-click="previousArticle" />
        <ArticleNextButton class="absolute top-0 right-0 mt-20 -mr-4" @on-click="nextArticle" />
      </div>

      <!-- article -->
      <article class="lg:max-w-xl lg:mt-12 mx-auto mt-8">

        <!-- author, date and title -->
        <section class="lg:border-0 lg:pb-0 pb-10 text-center border-b border-gray-300">
          <div class="flex items-center justify-center">
            <div class="flex items-center mr-5">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80" alt="" class="w-8 h-8 rounded-full">
              <span class="ml-2 text-sm font-medium text-gray-900">{{ article.author }}</span>
            </div>
            <span class="h-6 text-gray-400 border-r border-gray-400"></span>
            <span class="ml-5 text-sm text-gray-600">{{ article.date }}</span>
          </div>
          <h1 class="mt-6 text-3xl font-extrabold text-gray-900">{{ article.title }}</h1>
        </section>

        <!-- content -->
        <div id="article" ref="article">
          <!-- content dynamically added -->
        </div>
      </article>

      <!-- previous and next article buttons for smaller screens -->
      <section class="lg:hidden border-t border-gray-300">
        <div class="py-5">
          <div class="flex items-center justify-between">
            <ArticlePreviousButton @on-click="previousArticle" />
            <ArticleNextButton @on-click="nextArticle" />
          </div>
        </div>
      </section>

      <!-- article footer with socials -->
      <section class="max-w-xl mx-auto border-t border-gray-300">
        <div class="py-5">
          <div class="flex items-center justify-between">
            <div class="text-sm font-medium text-gray-900"> Vil du dele dette?</div>
            <div class="flex items-center">
              <svg class="text-ps-orange w-4 h-4" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6645 2.65667H12.1252V0.112667C11.8732 0.078 11.0065 0 9.99718 0C7.89118 0 6.44851 1.32467 6.44851 3.75933V6H4.12451V8.844H6.44851V16H9.29785V8.84467H11.5278L11.8818 6.00067H9.29718V4.04133C9.29785 3.21933 9.51918 2.65667 10.6645 2.65667Z"/>
              </svg>
              <svg class="text-ps-orange w-4 h-4 ml-3" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9959 16.0005V15.9998H15.9999V10.1318C15.9999 7.26114 15.3819 5.0498 12.0259 5.0498C10.4125 5.0498 9.32985 5.93514 8.88785 6.77447H8.84119V5.3178H5.65918V15.9998H8.97252V10.7105C8.97252 9.31781 9.23652 7.97114 10.9612 7.97114C12.6605 7.97114 12.6859 9.56047 12.6859 10.7998V16.0005H15.9959Z"/>
                <path d="M0.26416 5.31836H3.58149V16.0004H0.26416V5.31836Z"/>
                <path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z"/>
              </svg>
              <svg class="text-ps-orange w-4 h-4 ml-3" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ArticlePreviousButton from '@/components/article-prev-button.vue'
import ArticleNextButton from '@/components/article-next-button.vue'

export default {
  name: 'Article',
  components: {
    ArticlePreviousButton,
    ArticleNextButton,
  },
  computed: {
    breadcrumbs() {
      return [
        { text: 'Magasinet', disabled: false, href: '/'},
        { text: this.article.category, disabled: false, href: `/${this.article.category}`},
        { text: this.article.title, disabled: true }
      ]
    }
  },
  data() {
    return {
      article: {
        title: 'Kameratskap mot traumeness',
        author: 'Liz Bauer',
        date: '14 september, 2020',
        category: 'Kultur',
        content: [
          '<div class="my-8 text-sm text-gray-700"> <p>Hjemme på «gutterommet» hos Freddy Bolle (t.h.) står kaffen alltid klar om kameraten Per Willy Bårdsen trenger en prat. Bårdsen har PTSD etter internasjonal tjeneste for Forsvaret. Tilpasset arbeid og riktig behandling har gjort livet bedre.</p></div><div class="my-8"> <img src="https://psykiskhelse.no/assets/magazine/tema1nett.jpg" alt="" class="image-container rounded"> </div><div class="my-8 text-sm text-gray-700"> <p>Freddy Bolle kjenner mange som har problemer etter deltagelse i internasjonale operasjoner i Forsvaret, og praktiserer åpen dør i huset sitt: </p><br><p>– Det er ikke alltid jeg er en god støtte, men jeg prøver å lose dem videre, i et system hvor de kan henvende seg. Jeg stikker hodet litt fram. Jeg har en bror som er død og en som er syk. Jeg sier stort sett ja til å fronte sånne ting, synes det er viktig, sier han.</p><br><p>En undersøkelse blant Afghanistan-soldater i 2012, viste at hele 72, 4 prosent av de som ble betegnet som psykisk psyke etter tjeneste, ikke hadde tatt kontakt med det lokale hjelpeapparatet. Tilliten er ofte lav til det offentlige helsevesenet.</p><br><p>«Gutterommet» har mørke vegger, mørke skinn­sofaer og er fylt med medaljer, utmerkelser og forseggjorte våpen, som taler om et liv i Forsvaret. De to møttes i Somalia i 1993. Siden har begge vært ute på oppdrag for Norge en rekke ganger. Per Willy begynte å få symptomer på posttraumatisk stresslidelse (PTSD) etter sin sjette tur ut. Freddy mener han har sluppet unna.</p></div><div class="relative mt-8 mb-20"> <svg width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.3262 0.0478516V1.84961C9.74805 3.19727 7.90234 4.60352 6.78906 6.06836C5.67578 7.5332 5.11914 9.12988 5.11914 10.8584C5.11914 11.8838 5.26562 12.5869 5.55859 12.9678C5.82227 13.3779 6.14453 13.583 6.52539 13.583C6.90625 13.583 7.41895 13.4805 8.06348 13.2754C8.70801 13.041 9.29395 12.9238 9.82129 12.9238C11.0225 12.9238 12.0625 13.3779 12.9414 14.2861C13.8496 15.165 14.3037 16.249 14.3037 17.5381C14.3037 18.9443 13.7617 20.1602 12.6777 21.1855C11.5938 22.1816 10.2461 22.6797 8.63477 22.6797C6.67188 22.6797 4.89941 21.8301 3.31738 20.1309C1.73535 18.4316 0.944336 16.3369 0.944336 13.8467C0.944336 10.917 1.91113 8.19238 3.84473 5.67285C5.80762 3.12402 8.63477 1.24902 12.3262 0.0478516ZM33.2881 0.179688V1.84961C30.3291 3.54883 28.3809 5.07227 27.4434 6.41992C26.5059 7.76758 26.0371 9.34961 26.0371 11.166C26.0371 11.9863 26.1982 12.6016 26.5205 13.0117C26.8428 13.4219 27.1797 13.627 27.5312 13.627C27.8535 13.627 28.3369 13.5098 28.9814 13.2754C29.626 13.041 30.2705 12.9238 30.915 12.9238C32.1162 12.9238 33.1562 13.3633 34.0352 14.2422C34.9434 15.0918 35.3975 16.1465 35.3975 17.4062C35.3975 18.8418 34.8262 20.0869 33.6836 21.1416C32.5703 22.1963 31.1934 22.7236 29.5527 22.7236C27.6191 22.7236 25.876 21.8887 24.3232 20.2188C22.7705 18.5488 21.9941 16.4688 21.9941 13.9785C21.9941 10.9023 22.9756 8.10449 24.9385 5.58496C26.9014 3.03613 29.6846 1.23438 33.2881 0.179688Z" fill="#E86354" fill-opacity="0.6"/> </svg> <p class="quote absolute top-0 left-0 mt-px ml-5 text-2xl italic text-gray-700">Jeg har mer og mer behov for å være alene og ute i naturen.</p></div><div class="my-8 text-sm text-gray-700"> <p>– Men det er klart at mange år i utenlandstjeneste sliter på kropp og sjel. Jeg har mer og mer behov for å være alene og ute i naturen, sier han.</p><br><p>I rommet er det bilder av lillebroren Trond, krigshelten som ble drept av en veibombe i Afghanistan i 2010. En annen lillebror, Lasse, er ufør med PTSD-diagnose. Freddy prøver å stille opp for broren når han ønsker det.</p><br><p>Per Willy føler at han skritt for skritt har fått det bedre. Freddy var en av de første som forsto at kameraten var dårlig:</p><br><p>– Jeg skjønte det på reaksjoner han hadde. Han var så sint da han kjørte bil, hyttet neven og bannet.</p><br><p>– Jeg skjønte ingenting. Stedatteren min ville flytte ut, fordi jeg var verbalt aggressiv. Det holdt på å skjære seg med familien. Men vi fikk snakket ut, sier Per Willy. Tonen mellom vennene veksler mellom fleip og alvor.</p><br><p>– Selv om vi fleiper mye, så er jeg ufattelig glad for at jeg har Freddy.</p></div></div><div class="mt-10"> <h2 class="text-xl font-medium text-gray-900">Mestre arbeid</h2> <div> <div class="mt-6 mb-8 text-sm text-gray-700"> <p>Arbeidstrening gjennom Nav og deltidsjobb hjalp Per Willy et langt steg videre. Første gangen han skulle på intervju til sin nye arbeidsplass Sivilforsvaret, var han så syk at han ikke kunne dra alene. Konsulenten fra Nav måtte følge ham.</p><br><p>– Der kunne jeg være åpen om hvordan jeg hadde det fra dag én. Jeg fikk avtale om ett års arbeidstrening. Det er uten press, du styrer tempoet selv, slutter når du selv vil. De bygde meg opp. Jeg var utrolig heldig. Etter arbeidstreningen fikk jeg fulltidsengasjement. Men etter sju måneder gikk det nedover. Presset ble et annet. Husk ditt og datt! Jeg følte jeg måtte prestere. Jeg brukte hele helga på å komme meg. Det ble ekstremt frustrerende for de hjemme.</p><br><p>Bårdsens kolleger så at han var syk. Selv mente han at han bare kunne hvile litt på en stol. Etter sykemelding fikk han 50 prosent-stilling.</p><br><p>– Målet mitt var 100 prosent jobb, så jeg var litt nede da jeg ikke klarte det.</p><br><p>– Jeg husker du sa det, og jeg sa at det må du ikke finne på. Jeg kjenner deg, sier Freddy.</p><br><p>Selv jobber Bolle 60 prosent. For noen år siden startet han en barnevernsinstitusjon, som han etter hvert solgte. Her fortsatte han å jobbe deltid. Han erkjenner at årene med utenlandstjeneste, og jobb med vanskeligstilt ungdom, gjør at han trenger mye ro. Han regulerer selv behovet for å hente seg inn. De to kameratene finner også stillhet og avkobling ved å dra på fisketurer sammen, på fjellet om sommeren og med isfiske om vinteren.</p></div></div><div class="my-12"> <div class="border-ps-orange border-2 rounded"> <div class="px-5 py-5"> <h2 class="mb-3 text-xl font-medium text-center text-gray-900">PTSD - posttraumatisk stresslidelse</h2> <ul class="px-5 text-gray-700 list-disc"> <li>En angsttilstand som kan utvikles ved skremmende eller farlige opplevelser.</li><li>Kan settes som diagnose hvis angst-følelsene fortsetter i lang tid etter hendelsen(e) og går ut over dagliglivet.</li><li>Mareritt, indre uro og sinne er vanlig. Kan medføre plutselige og overveldende minner av de truende situasjonene.</li></ul> </div></div></div><div class="mt-10 mb-8"> <h2 class="text-xl font-medium text-gray-900">Ikke PTSD</h2> <div class="mt-6 mb-8 text-sm text-gray-700"> <p>Da Per Willy Bårdsen ble syk, skulle han først få behandling hos Nasjonal militærmedisinsk poli­klinikk. </p><br><p>– Det var ett år med samtaler og eksponering. Jeg fikk ingenting ut av det. Jeg følte de hele tiden prøvde å unngå diagnosen på posttraumatisk stress. De fant alle mulige diagnoser som ligner. At jeg var redd for åpne plasser og slikt. Jeg fikk de samme spørsmålene om igjen og om igjen. Enda de så hvor syk jeg var da jeg kom. Jeg var så dårlig at søstera mi måtte kjøre meg dit.</p><br><p>– Jeg husker du gruet deg mange dager i forkant, sier Freddy.</p><br><p>I 1998 kom de første symptomene.</p><br><p>– Jeg ante ikke hva det var, ville bare holde det for meg selv. Jeg hadde ingen anelse om at det hadde med opplevelser i Forsvaret å gjøre. Da jeg var hjemme på perm, fikk jeg angstanfall. Jeg kunne ikke stå på beina, gikk rett i bakken. Noe skjedde i hjernen. Jeg roet meg ikke før jeg var hjemme.</p><br><p>– I et trygt rom, sier Freddy.</p></div></div></div></section>'
        ]
      }
    }
  },
  methods: {
    // add content to site
    appendContent() {
      this.$refs.article.innerHTML = this.article.content
    },
    // navigate to previous article
    previousArticle() {
      // TBA
      console.log('previous')
    },
    // navigate to next article
    nextArticle() {
      // TBA
      console.log('next')
    }
  },
  mounted() {
    // append content on load
    this.appendContent()
  }
}
</script>

<style>
  .image-container {
    height: 300px;
    width: 100%;
  }
  .quote {
    font-family: 'Times New Roman', Times, serif;
  }
</style>