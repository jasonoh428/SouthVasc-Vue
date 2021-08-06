<template>
  <section class="cta">
    <strong>{{ content.title }}</strong>

    <a target="_blank" :href="content.button1.file.asset.url" class="button button--Green">{{content.button1.display}}</a
    ><nuxt-link :to="content.button2.slug" class="button button--Blue">{{content.button2.display}}</nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.cta {
  @include center;
  @include maxWidth;

  padding: 4rem 0;

  text-align: center;

  strong {
    display: block;
    font-size: 2.2rem;
    text-align: center;
    color: #0b1188;
  }

  .button {
    @include center;
    margin-top: 2rem;
    margin-right: 1rem;
  }
}
</style>
