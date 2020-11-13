<template>
  <div :class="smallList ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2' : 'grid-cols-1 lg:grid-cols-3 md:w-2/3 lg:w-full gap-4' " class="grid mx-auto">
      <div v-for="article in articles" :key="article.id">
          <ArticleCard :article="article" :smallCard="smallCard" />
      </div>
  </div>
</template>

<script>
import ArticleCard from './article-card'

export default {
    name: 'ArticleList',
    components: {
        ArticleCard
    },
    props: {
        articles: {
            type: Array,
            required: true
        },
        smallList: {
            type: Boolean,
            required: true
        },
        smallCard: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>

</style>