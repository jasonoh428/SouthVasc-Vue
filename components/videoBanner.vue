<template>
  <section :style="{ '--bg': imageUrl }" class="videoBanner">
    <div @click = "toggleVideo = !toggleVideo" class="playButton"></div>
    <h4>{{ content.text }}</h4>
    <div v-if = "toggleVideo" @click = "toggleVideo = !toggleVideo" class="darken">
      <YoutubeComp v-if = "toggleVideo" class="fixedVideo" :url="content.video.url" />
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
  },

  data() {
      return {
          toggleVideo:false
      }
  },

  mounted() {
    console.log(this.$props.content);
  },

  computed: {
    imageUrl() {
      return "url(" + this.$urlFor(this.$props.content.background) + ")";
    }
  }
};
</script>

<style lang="scss" >
.videoBanner {
  background-image: var(--bg);
  padding: 6rem 2rem;
  background-size: cover;
  h4 {
    color: white;
    text-shadow: 2px 2px 2px rgb(0 0 0 / 20%);
    font-size: 2.4rem;
    padding: 2rem 0;
    @include center;
    display: block;
    text-align: center;
  }

  @include desktop {
    min-height: 50rem;
    padding: 15rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.playButton {
    cursor: pointer;
  height: 2rem;
  width: 1.5rem;

  clip-path: polygon(100% 50%, 0 0, 0 100%);

  background-color: white;

  @include center;
}
.darken {
    background-color:rgba(black, .7);
    position: fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
}
.fixedVideo {
  position: fixed;
  z-index: 100;
 

  top:50%;
  left:50%;
  

  transform: translate(-50%, -50%);
}
</style>
