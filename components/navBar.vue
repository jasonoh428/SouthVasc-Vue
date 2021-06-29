<template>
  <nav>
    <div class="navLinks">
      <menuLink :link = "link" v-for="(link, i) in menu.links" :key="i" />
    </div>
  </nav>
</template>

<script>
import { navQuery } from "~/utils/queries.js";
export default {
  data() {
    return {
      menu: {}
    };
  },

  async fetch() {
    this.menu = await this.$sanity.fetch(navQuery);
  },

  mounted() {
    console.log(this.menu);
  }
};
</script>

<style lang="scss" scoped>


.navLinks {
    @include desktop {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: stretch;
        position: relative;
    }
}

</style>
