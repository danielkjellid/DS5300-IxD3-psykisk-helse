<template>
<router-link :to="{name: 'Article', params: {article: '1' }}">
    <div class="rounded-md shadow-xl overflow-hidden">
        <div class="relative pb-40">
            <img src="https://source.unsplash.com/random" class="absolute h-full w-full object-cover" alt="Article Image">
        </div>
        <div class="p-5">
            <span class="text-xs text-ps-orange font-semibold"> {{article.category}} </span>
            <h3 class="text-gray-800 font-bold text-base pb-3 pt-1"> {{article.title}} </h3>
            <p class="font-sm text-gray-600 font-normal h-48"> {{article.text}} </p>
            <div class="flex items-center">
                <img src="https://source.unsplash.com/random" class="rounded-full w-10 h-10 shadow-md object-cover mr-4" alt="">
                <div>
                    <p class="text-gray-800 font-medium text-sm "> {{article.authorName}} </p>
                    <p class="text-gray-600 text-xs font-normal"> {{article.datePublished}} &bull; {{article.readTime}} lesestoff </p>
                </div>
            </div>  
        </div>
    </div>
</router-link>
</template>

<script>
export default {
    name: 'ArticleCard',
    props: ['article']
}
</script>

<style>

</style>