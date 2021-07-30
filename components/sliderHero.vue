<template>
  <section
    class="sliderHero"
    :style="{ '--bgImage': 'url(' + $urlFor(content.slides[current]) + ')' }"
  >

  <div class="heroDarken"></div>

  
    <div class="sliderHero__text">
      <h1>{{ content.heading }}</h1>
      <p>{{ content.subHeading }}</p>

      <nuxt-link class="button button--Green" :to="content.button1Link.slug">{{content.button1Link.display}}</nuxt-link>
      <overlayButton :display = "'Request Appointment'"/>
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
      current: 0,
      interval: null
    };
  },

  methods: {
    startInterval() {
      this.interval = setInterval(() => {
        this.current = sliderControls(
          this.current,
          this.$props.content.slides.length,
          1
        );
      }, 8000);
    },

    preload(url) {
      
      let img = new Image();
      img.src = url;
    }
  },

  beforeMount() {
    this.$props.content.slides.forEach(image => {
      this.preload(this.$urlFor(image));
    });
  },
  mounted() {
    this.startInterval();
    console.log(this.$props.content)
  },

  destroyed() {
    clearTimeout(this.interval);
  }
};
</script>

<style lang="scss" scoped>
.sliderHero {
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-image: var(--bgImage);

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;


}

.heroDarken {
  height:100%;
  width:100%;
  top:0;
  left:0;
  position: absolute;
  z-index:0;
  background-color:rgba(black, .3)
}

.sliderHero__text {
  text-align: center;
  font-weight: bold;
  z-index:1;
  

  h1, p {
    color:white;
  }

  h1 {
    font-size: 2.6rem;
  }
  @include maxWidth;
  @include center;

  @include desktop {
    p,
    h1 {
      max-width: 60%;
      margin-right: 0;
      margin-left: auto;
    }
    text-align: right;
  }
}
</style>
