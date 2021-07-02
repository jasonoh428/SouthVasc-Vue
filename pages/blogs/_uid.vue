<template>
  <section class="blog">
    <div class="pageTitle">
      <h1>{{ page.title }}</h1>
    </div>

    <main class="blogContent">
      <sanity-content   :serializers="serializers" :blocks="page.text" />
    </main>

    <blogs-section :content="content"
      ><p class = "recommendationHeading">You Might Also Enjoy...</p></blogs-section
    >
  </section>
</template>

<script>
import { blogQuery } from "~/utils/queries.js";
import blogsSection from "../../components/blogsSection.vue";
import inlineImage from "~/components/inlineImage.vue";
export default {
  components: { blogsSection },

  async asyncData({ params, $sanity }) {
    const page = await $sanity.fetch(blogQuery(params.uid));
    return { page };
  },

  computed: {
    //Prep prop for blogs section
    content() {
      let content = {};
      content.blogs = this.page.otherBlogs;
      return content;
    }
  },

  data() {
    return {
      serializers: {
        types: { inlineImage: inlineImage }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.pageTitle {
  background-color: var(--lightBlue);
  min-height: 100px;

  @include flexCenter;

  h1 {
    padding: 2rem;
    text-align: center;
    @include h1;
  }
}

.recommendationHeading {
    width:100%;
    margin: 4rem 0;
    text-align: center;
    font-weight: bold;
    font-size:3.7rem;
}

.blogContent {
  margin: 4rem 0;
  @include maxWidth;
  @include center;
}
</style>
