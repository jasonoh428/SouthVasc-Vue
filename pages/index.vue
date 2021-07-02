<template>
  <div class="home">
    <contentZone :content="page.content" />
  </div>
</template>

<script>
import { homeQuery } from "~/utils/queries.js";
export default {
  async asyncData({$sanity}) {
    const page = await $sanity.fetch(homeQuery());
    return { page };
  }
};
</script>

<style></style>
