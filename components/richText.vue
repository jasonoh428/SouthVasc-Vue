<template>
  <section class="richText">
    <sanity-content :serializers="serializers" :blocks="content.text" />
  </section>
</template>

<script>
import inlineImage from "~/components/inlineImage.vue";
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },

  mounted() {
    console.log(this.$props.content);
  },

  data() {
    return {
      serializers: {
        types: { inlineImage: inlineImage }
      }
    };
  }
};
</script>

<style lang="scss">
.richText {
  @include center;
  @include maxWidth;
  margin-bottom: 8rem;

  h2 {
    @include h2;
  }

  h2 span {
    @include serviceH2;
  }

  h3 {
    @include h3;
  }
}
</style>
