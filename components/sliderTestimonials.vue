<template>
  <section class="sliderTestimonials">
    <div
      v-for="(testimonial, i) in content.testimonials"
      :key="i"
      class="slider__testimonial"
    >
      <p>{{ testimonial.text }}</p>
      <div class="testimonials__stars">
        <div v-for="(star, i) in testimonial.stars" :key="i" class="star">
            <div class="star__cutOut"></div>
        </div>
      </div>
      <p>{{ testimonial.name }}</p>
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
.sliderTestimonials {
  @include maxWidth;
  @include center;
}

.slider__testimonial {
    text-align: center;
}
.testimonials__stars {
    display: flex;
    flex-direction: row;
    justify-content: center;
    @include center;
}
.star {
    margin-right: .5rem;
    background-color:var(--lightBlue);
    height:2rem;
    width:2rem;
    
    position: relative;
}

.star__cutOut {
    position:absolute;
    height:100%;
    width:100%;
    background-color:white;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

}
</style>
