<template>
  <div class="sidebar">
    <h3>Click to View Treatments</h3>
    <hr />
    <nuxt-link
      class="sidebar__Link"
      :to="link.slug"
      :key="i"
      v-for="(link, i) in page"
      >{{ link.title }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ["page"],

  mounted() {
    console.log(this.$props.page);
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  flex: 1;
  padding-right: 3rem;
}

.sidebar__Link {
  font-size: 15px;
  line-height: 180%;
  color: #656f72;
  margin: 1rem 0;
  padding: 0;
  display: block;
  text-decoration: underline;

  color: #337ab7;
}
</style>
