<template>
<router-link :to="{name: 'Article', params: {article: '1' }}">
    <div class="rounded-md shadow-xl overflow-hidden">
        <div :class="smallCard ? 'pb-24' : 'pb-32'" class="relative">
            <img src="https://source.unsplash.com/random" class="absolute h-full w-full object-cover" alt="Article Image">
        </div>
        <div class="p-5">
            <span class="text-xs text-ps-orange font-semibold"> {{article.category}} </span>
            <h3 :class="smallCard ? 'text-sm' : 'text-base'" class="text-gray-800 font-bold pb-3 pt-1"> {{article.title}} </h3>
            <p :class="smallCard ? 'text-xxs md:text-xs h-24' : 'text-sm h-40'" class="text-gray-600 font-normal"> {{article.text}} </p>
            <div class="flex items-center">
                <img src="https://source.unsplash.com/random" :class="smallCard ? 'w-8 h-8' : 'w-10 h-10'" class="rounded-full shadow-md object-cover mr-4" alt="">
                <div>
                    <p :class="smallCard ? 'text-xs' : 'text-sm'" class="text-gray-800 font-medium text-sm "> {{article.authorName}} </p>
                    <p :class="smallCard ? 'text-xxs' : 'text-xs'" class="text-gray-600 text-xs font-normal"> {{article.datePublished}} <span class="hidden md:inline"> &bull; {{article.readTime}} lesestoff </span></p>
                </div>
            </div>  
        </div>
    </div>
</router-link>
</template>

<script>
export default {
    name: 'ArticleCard',
    props: { 
        article: {
            type: Object,
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