<template>
  <section
    class="sliderHero"
    :style="{ '--bgImage': 'url(' + $urlFor(content.slides[0]) + ')' }"
  >
    <div class="sliderHero__text">
      <h1>{{ content.heading }}</h1>
      <p>{{ content.subHeading }}</p>

      <nuxt-link class="button button--Green" to="/">placeholder</nuxt-link>
      <nuxt-link class="button button--Blue" to="/">placeholder</nuxt-link>
    </div>
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
.sliderHero {
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-image: var(--bgImage);

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sliderHero__text {
  text-align: center;
  font-weight: bold;
  h1 {
    font-size: 2.6rem;
  }
  @include maxWidth;
  @include center;
}
</style>
