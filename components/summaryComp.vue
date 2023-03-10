<template>
  <div class="mainWrapper">
    <section class="preBody">

      <div class="summaryCom">
        <sanity-content :serializers="serializers" :blocks="content.text"></sanity-content>

      </div>
    </section>
  </div>
</template>

<script>


import groupImage from "~/components/groupImage.vue";
import inlineImage from "~/components/inlineImage.vue";
import richOverlayButton from "~/components/richOverlayButton.vue";
import titleBar from "~/components/titleBar.vue";

export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      serializers: {
        types: {
          inlineImage: inlineImage,
          titleBar: titleBar,
          overlayButton: richOverlayButton,
          groupImage: groupImage
        }
      }
    };
  }
};
</script>

<style lang="scss">
.preBody {
  @include center;
  @include maxWidth;
  margin-bottom: 4rem;
  padding-bottom: 20px;
  padding-top: 20px;

  @include desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
  }
}

.identity {
  margin-bottom: 1rem;

  @include desktop {
    width: 32%;
    text-align: center;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  h2 {
    @include h2;

    @include desktop {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 1.4rem;
    line-height: 120%;
    padding: 0;
    color: var(--greyText);
    font-weight: normal;
    font-family: "open_sansregular", arial, sans-serif;
  }
}

.summaryCom {
  @include desktop {
    width: 62%;
  }
}

.mainWrapper {
  background-color: #f9f7f5;
}
</style>
