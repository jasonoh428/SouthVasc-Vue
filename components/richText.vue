<template>
  <section class="richText">
    <sidebar class="richText__Sidebar" :page="content.sidebarPages" v-if="content.sidebar" />
    <sanity-content class="richText__Text" :serializers="serializers" :blocks="content.text" />
  </section>
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
.beforeAfter {
  display: block;
  margin-top: 10px
}

.richText {
  @include center;
  @include maxWidth;

  display: flex;
  flex-direction: column;

  @include desktop {
    display: flex;
    flex-direction: row;
  }

  margin-bottom: 4rem;
  padding-bottom: 20px;

  h2 {
    @include h2;
  }

  h2 span {
    @include serviceH2;
  }

  h3 {
    @include h3;
  }

  h4 {
    font-size: 2rem;

    @include desktop {
      font-size: 3rem;
      font-weight: normal;
      font-family: "Raleway", sans-serif;
    }
  }

  ul {
    margin-bottom: 3rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
}

.richText__Text {
  flex: 3;
  order: 1;

  p {
    strong {
      padding: 10px;
      width: 100%;
      color: gray;
    }
  }

  @include desktop {
    order: 2;
  }

  .richOverlayButton {
    margin-top: 2rem;

    .button {
      font-size: 1.4rem;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

.richText__Sidebar {
  order: 2;

  @include desktop {
    order: 1;
  }
}
</style>
