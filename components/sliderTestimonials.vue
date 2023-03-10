<template>
  <div>
    <section class="sliderTestimonials">
      <div @click="current = slider(1)" class="beforeAfters__arrows"></div>
      <div @click="current = slider(-1)" class="beforeAfters__arrows"></div>
      <div class="sliderTestimonialsItemsWrapper">
        <div v-for="(testimonial, i) in content.testimonials" :key="i" :class="{'slider__testimonial':true,'active':current === i,'left-slider':i<current,'right-slider':i>current}">
          <p>{{ testimonial.text }}</p>
          <div class="testimonials__stars">
            <div v-for="(star, i) in testimonial.stars" :key="i" class="star">
              <div class="star__cutOut"></div>
            </div>
          </div>
          <p>{{ testimonial.name }}</p>
        </div>
      </div>      
    </section>
    <SocialLink style="margin-bottom: 0px;" />

  </div>
</template>

<script>
import SocialLink from "~/components/social-links.vue"; // import the component
import { sliderControls } from "~/utils/helpers.js";
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  components: { SocialLink },
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
  padding-left:50px;
  padding-right:50px;  
}
.sliderTestimonialsItemsWrapper {
  position: relative;
  height: 120px;
  overflow-x: hidden;
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
.slider__testimonial {
  text-align: center;  
  position: absolute;
  left: 100%;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  transition: all 1s;

}
.slider__testimonial.active {
  left:0;
}
.slider__testimonial.left-slider {
  left:-100%;
}
.slider__testimonial.right-slider {
  left:100%;
}
.beforeAfters__arrows {
  z-index: 100;  
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
  clip-path: polygon(50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%);
}
</style>
