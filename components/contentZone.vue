<template>
  <section class="pageContent">
    <component

   
      :content="block"
      :is="block._type"
      v-for="(block, i) in content"
      :key="i"
    />
    
  </section>
</template>

<script>
import richText from "~/components/richText.vue";
import serviceGrid from "~/components/serviceGrid.vue";
import summaryComp from "~/components/summaryComp.vue";
export default {
  components: {
    'summaryCom':summaryComp,
    richText,
    serviceGrid
  },
  props: {
    content: {
      type: Array,
      required: false
    },

   
  },

 
};
</script>

<style lang="scss" scoped>

</style>
