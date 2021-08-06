<template>
  
  <section class="page">

      <div class="pageTitle">
          <h1>{{page.title}}</h1>
      </div>
      <contentZone  :content = "page.content"/> 
  </section>
</template>

<script>
import {pageQuery} from '~/utils/queries.js'
import contentZone from '~/components/contentZone.vue'
import richText from '~/components/richText.vue'
export default {

    components: {
        contentZone,
        richText
    },
    async asyncData({params, $sanity}) {

        const page = await $sanity.fetch(pageQuery(params.uid))
        return {page}
    },

    mounted() {
        console.log(this.page)
    }


 

}
</script>

<style lang = "scss" scoped>

.pageTitle {
    background-color:var(--lightBlue);
    min-height: 100px;

    padding-top: 10rem;

    @include flexCenter;

    h1 {
        padding:2rem;
        text-align:center;
        @include h1;
        
    }
}

</style>