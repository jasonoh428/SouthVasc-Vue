<template>
  <section class="page">
    <div class="pageTitle">
      <h1>{{ page.headerTitle ? page.headerTitle : page.title }}</h1>
    </div>

    <div class="pageInfo">
      <breadcrumbs :breadcrumbs = "page.breadcrumbs" v-if="page.breadcrumbs" :slug="page.slug.current" :title="page.title" />
      <div v-if = "page.socials" class="pageSocials">
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
    <contentZone :content="page.content" />
  </section>
</template>

<script>
import { pageQuery } from "~/utils/queries.js";
import contentZone from "~/components/contentZone.vue";
import richText from "~/components/richText.vue";
export default {
  components: {
    contentZone,
    richText
  },
  async asyncData({ params, $sanity }) {
    const page = await $sanity.fetch(pageQuery(params.uid));
    return { page };
  },

  data() {
    return {
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
