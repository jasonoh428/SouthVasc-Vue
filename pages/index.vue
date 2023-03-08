<template>
  <div class="home">
    <contentZone :content="page.content" />
  </div>
</template>

<script>
import SocialLink from "~/components/social-links.vue"; // import the component
import { homeQuery } from "~/utils/queries.js";

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
