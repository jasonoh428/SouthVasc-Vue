<template>
  <section class="ctaAlt">
    <p>{{ content.heading }}</p>

    <div class="ctaAlt__images">
      <img :src="$urlFor(content.img1)" alt="" />
      <img :src="$urlFor(content.img2)" alt="" />
    </div>

    <nuxt-link class="button button--Green" to="">Call us</nuxt-link>
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
.ctaAlt {
  @include maxWidth;
  @include center;

  text-align: center;

  p {
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    font-weight: 800;
    text-align: center;
    color: #2b2c2e;
    letter-spacing: 0px;
    line-height: 36px;
  }

  .button {
      margin-top: 4rem;
      display: inline-block;
      @include center;
      text-align: center;
  }
}

.ctaAlt__images {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    width: 40%;
  }
}
</style>
