<template>
  <section class="richText">
    <sidebar class = "richText__Sidebar" :page = "content.sidebarPages" v-if="content.sidebar" />
    <sanity-content
      class="richText__Text"
      :serializers="serializers"
      :blocks="content.text"
    />
  </section>
</template>

<script>
import inlineImage from "~/components/inlineImage.vue";
import titleBar from "~/components/titleBar.vue";
import richOverlayButton from "~/components/richOverlayButton.vue";

export default {
  props: {
    content: {
      type: Object,
      required: true
    },

   
  },

  

  data() {
    return {
      serializers: {
        types: { inlineImage: inlineImage, titleBar: titleBar, overlayButton:richOverlayButton }
      }
    };
  }
};
</script>

<style lang="scss">
.richText {
  @include center;
  @include maxWidth;

  display: flex;
  flex-direction: column;




  

  @include desktop {
    display: flex;
    flex-direction: row;
  }
  margin-bottom: 8rem;

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
    font-size:2rem;

    @include desktop {
      font-size: 3rem;
      font-weight: normal;
      font-family: 'Raleway', sans-serif;
    }
  }


ul {
  margin-bottom: 3rem;
  li {
    margin-bottom: .5rem;
  }
}

}

.richText__Text {
  flex: 3;
  order:1;
  @include desktop {
    order:2;
  
  }

    .richOverlayButton {
      margin-top: 2rem;
      .button {font-size:1.4rem;}
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
}

.richText__Sidebar {
  order:2;

  @include desktop {
    order:1
  }
}
</style>
