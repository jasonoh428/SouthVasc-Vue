<template>
  <section class="sliderTestimonials">
    <div @click="current = slider(1)" class="beforeAfters__arrows"></div>
    <div @click="current = slider(-1)" class="beforeAfters__arrows"></div>
    <div
      v-for="(testimonial, i) in content.testimonials"
      :key="i"
      class="slider__testimonial"
      v-show="current === i"
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
import { sliderControls } from "~/utils/helpers.js";
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      current: 0
    };
  },

  methods: {
    slider(dir) {
      return sliderControls(
        this.current,
        this.content.testimonials.length,
        dir
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.sliderTestimonials {
  @include maxWidth;
  @include center;

  margin-top: 2rem;
  margin-bottom: 2rem;

  position: relative;
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
  margin-right: 0.5rem;
  background-color: var(--lightBlue);
  height: 2rem;
  width: 2rem;

  position: relative;
}

.star__cutOut {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}
</style>
