<template>
  <div class="home">
    <contentZone :content="page.content" />
    <SocialLink />
  </div>
</template>

<script>
import { homeQuery } from "~/utils/queries.js";
import SocialLink from "~/components/social-links.vue"; // import the component

export default {  
  components: {
    SocialLink // register the component
  },
  async asyncData({$sanity}) {
    const page = await $sanity.fetch(homeQuery());
    return { page };
  }
};
</script>

<style></style>
