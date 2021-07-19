<template>
  <section class="cta">
    <strong>{{ content.title }}</strong>

    <a href="" class="button button--Green">placeholder</a
    ><a href="" class="button button--Blue">placeholder</a>
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
  }
}
</style>
