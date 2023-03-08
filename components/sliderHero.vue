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
    <div class="slider-btn-container">
      <div @click="nextSlide()" class="backButton"></div>
      <div @click="priorSlide()" class="forwardButton"></div>
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
      }, 3000);
    },

    preload(url) {
      
      let img = new Image();
      img.src = url;
    },
    nextSlide(){
      this.current = sliderControls(
          this.current,
          this.$props.content.slides.length,
          1
        );
    },
    priorSlide(){
      this.current = sliderControls(
          this.current,
          this.$props.content.slides.length,
          -1
        );
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
  },

};
</script>

<style lang="scss" scoped>
.sliderHero { 
  height: 65vh;
  background-size: cover;
  background-position: center top;
  background-image: var(--bgImage);

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  transition: background 1s linear;
  
  .slider-btn-container{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }

  .backButton, .forwardButton {
    height: 15px;
    width: 15px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border-right: 3px solid var(--bg);
    border-top: 3px solid var(--bg);
  }

  .forwardButton {
    transform: rotate(45deg);
  }

  .backButton {
    transform: rotate(225deg);
  }
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
