<template>
  <section class="blog">
    <div class="pageTitle">
      <h1>{{ page.headerTitle ? page.headerTitle : page.title }}</h1>
    </div>

    <div class="pageInfo">
      <breadcrumbs
        :breadcrumbs="page.breadcrumbs"
        :slug="page.slug.current"
        :title="page.title"
      />
      <div v-if="page.socials" class="pageSocials">
        <iframe
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FSouthern-Vascular-of-Panama-City-321683894686825%2F&width=150&layout=button_count&action=like&size=small&share=true&height=46&appId"
          width="150"
          height="46"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        <div>
          <a
            class="twitter-share-button"
            href="https://twitter.com/intent/tweet"
          >
            Tweet</a
          >
        </div>

        <div>
          <a
            data-pin-do="buttonBookmark"
            href="https://www.pinterest.com/pin/create/button/"
          ></a>
        </div>
      </div>
    </div>

    <main class="blogContent">
      <sanity-content :serializers="serializers" :blocks="page.text" />
    </main>

    <blogs-section :content="content"
      ><p class="recommendationHeading">
        You Might Also Enjoy...
      </p></blogs-section
    >
  </section>
</template>

<script>
import { blogQuery } from "~/utils/queries.js";
import blogsSection from "../../components/blogsSection.vue";
import inlineImage from "~/components/inlineImage.vue";
import groupImage from "~/components/groupImage.vue";
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
        types: { inlineImage: inlineImage, groupImage }
      },

      pinterest: false
    };
  },

  watch: {
    pinterest() {
      window.buildPinterest();
    }
  },

  mounted() {
    twttr.widgets.load();

    if (typeof window.buildPinterest === "function") {
      window.buildPinterest();
    }
  },

  head() {
    return {
      script: [
        {
          type: "text/javascript",

          defer: true,
          vmid: "pinterest",
          "data-pin-build": "buildPinterest",
          callback: () => (this.pinterest = true),

          src: "//assets.pinterest.com/js/pinit.js"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.pageTitle {
  background-color: var(--lightBlue);
  min-height: 100px;

  padding-top: 15rem;

  @include desktop {
    padding-top: 10rem;
  }

  @include flexCenter;

  h1 {
    padding: 2rem;
    text-align: center;
    @include h1;
  }
}

.recommendationHeading {
  width: 100%;
  margin: 4rem 0;
  text-align: center;
  font-weight: bold;
  font-size: 3.7rem;
}

.blogContent {
  margin: 4rem 0;
  @include maxWidth;
  @include center;
}

.pageInfo {
  @include maxWidth;
  @include center;

  padding-top: 2rem;

  display: flex;
  flex-direction: column;

  @include desktop {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
}

.pageSocials {
  display: flex;

  flex-direction: row;
  align-items: flex-start;

  *:not(iframe) {
    margin-right: 0.4rem;
  }
}
</style>
