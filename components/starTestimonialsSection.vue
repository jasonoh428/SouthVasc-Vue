<template>
  <div class="starTestimonialsSection">
    <starTestimonial
      :testimonial="testimonial"
      v-for="(testimonial, i) in content.testimonials"
      :key="i"
    />
  </div>
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
.starTestimonialsSection {
  @include maxWidth;
  @include center;
}
</style>
