<template>
  <section class="imageTesimonialsSection">
    <h3 v-if="content.show">{{ content.title }}</h3>
    <imageTestimonial
      :key="i"
      :testimonial="testimonial"
      v-for="(testimonial, i) in content.testimonials"
    />
  </section>
</template>

<script>
export default {
  props: {
    content: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.imageTesimonialsSection {
  margin-top: 8rem;
  @include maxWidth;
  @include center;

  h3 {
    font-size: 3.6rem;
    font-weight: bold;
    text-align: center;
  }
}
</style>
