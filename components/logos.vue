<template>
  <section class="logos">
    <div :key="i" v-for="(logo, i) in content.logos" class="logos__container">
      <img class="logos__Logo" :src="$urlFor(logo.image)" :alt="logo.name" />
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
.logos {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @include maxWidth;
  @include center;

  @include desktop {
    margin-top: 3rem;
    margin-bottom: 3rem;
    flex-direction: row;
  }
}

.logos__container {
  flex: 1;
  display: block;
  margin-bottom: 1rem;

  img {
    max-width: 100%;
  }

  padding:1rem;
}

</style>
