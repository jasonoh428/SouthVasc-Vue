<template>
  <section class="serviceGrid">
    <p>What we offer</p>
    <h3>Services</h3>

    <div
      v-for="(service, i) in content.pages"
      :key="i"
      :style="{ '--bg': 'url(' + $urlFor(service.hero) + ')' }"
      class="serviceCard"
    >
      <h4>{{ service.title }}</h4>
      <nuxt-link :to="service.slug.current">more info</nuxt-link>
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
  },

  mounted() {
    console.log(this.$props.content);
  }
};
</script>

<style lang="scss" scoped>
.serviceGrid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @include maxWidth;
  @include center;

  p {
    font-family: "open_sanssemibold", arial, sans-serif;
    letter-spacing: 2px;
    font-weight: 600;
    margin-bottom: 18px;
    text-transform: uppercase;

     @include desktop {
         margin-top: 4rem;
        width:100%;
        text-align: center;
    }
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 3.6rem;

    @include desktop {
        width:100%;
        text-align: center;
    }
  }

  @include desktop {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
  }
}

.serviceCard {
   background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), var(--bg);
  height: 202px;
  width: 234px;
  border:1px solid white;
  background-size: cover;
  background-position: center center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  @include desktop {
      width:25%;
  }

  a,
  h4 {
      text-align: center;
    color: white;
    text-decoration: none;
  }

  h4 {
      font-size:1.8rem
  }

  a {
      font-size:1.2rem;
  }
}
</style>
