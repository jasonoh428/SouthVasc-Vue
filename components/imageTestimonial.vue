<template>
  <div class="imageTestimonial">
    <img :src="$urlFor(testimonial.image)" alt="" />
    <p>{{ testimonial.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.imageTestimonial {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-top: 2px solid var(--green);
  border-bottom: 2px solid var(--green);

  margin: 4rem 0;
  padding: 2rem 0;

  p,
  img {
    width: 45%;
    display: block;
  }
}
</style>
