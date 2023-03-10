<template>
  <div class="mainWrapper">
    <section class="beforeAfters">

      <h2 class="beforeAfterTitle">Before & Afters</h2>
      <div class="beforeAfters__images">
        <div @click="current = slider(1)" class="beforeAfters__arrows"></div>
        <div @click="current = slider(-1)" class="beforeAfters__arrows"></div>
        <img class="beforeAfters__image" :src="$urlFor(content.beforeAfters[current].imageA)" alt="" />
        <img class="beforeAfters__image" :src="$urlFor(content.beforeAfters[current].imageB)" alt="" />
      </div>
      <div class="beforeAfters__Controls">
        <div :key="i" :aria-selected="current === i" v-for="(item, i) in content.beforeAfters" @click="current = i"
          class="circle"></div>
      </div>
    </section>
  </div>
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

  methods: {
    slider(dir) {
      return sliderControls(
        this.current,
        this.content.beforeAfters.length,
        dir
      );
    }
  },

  data() {
    return {
      current: 0
    };
  },

  mounted() {
    console.log(this.$props.content);
  }
};
</script>

<style lang="scss" scoped>
.beforeAfters {
  @include maxWidth;
  @include center;

  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 20px;

  h2 {
    @include h2;

    @include desktop {
      margin-top: 0;
    }
  }
}

.beforeAfters__images {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.beforeAfters__image {
  width:40%;
}
.beforeAfters__Controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @include center;
}

.beforeAfters__arrows {
  position: absolute;
  height: 2rem;
  width: 2rem;

  border-right: 2px solid var(--greyText);
  border-top: 2px solid var(--greyText);

  cursor: pointer;

  top:0;
  bottom:0;

  margin-top: auto;
  margin-bottom: auto;

  &:nth-of-type(1) {
    right: 0;
    transform: rotate(45deg);
  }

  &:nth-of-type(2) {
    left: 0;
    transform: rotate(-135deg);


  }
}

.beforeAfterTitle {
  color: var(--greyText);
  font-size: 2.4rem;
  padding: 2rem 0;
  @include center;
  display: block;
  text-align: center;
}

.mainWrapper {
  background-color: #f9f7f5;
}
</style>
