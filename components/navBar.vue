<template>
  <nav>
    <div @click = "opened = !opened" :aria-selected = "opened" class="hamburger">
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
    </div>
    <div :class = "!opened ? 'hideNav' : ''" class="navLinks">
      <menuLink :link="link" v-for="(link, i) in menu.links" :key="i" />
    </div>
  </nav>
</template>

<script>
import { navQuery } from "~/utils/queries.js";
export default {
  data() {
    return {
      menu: {},
      opened:false
    };
  },

  async fetch() {
    this.menu = await this.$sanity.fetch(navQuery);
  }
};
</script>

<style lang="scss" scoped>
.navLinks {
  @include desktop {
    display: flex !important;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
    position: relative;
  }
}

.hamburger {
  width: 5rem;
  height: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-right: 2rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-bottom: 2rem;

  @include desktop {
    display: none;
  }

  
}

.hideNav {
  display: none;

}

.hamburger__line {
  width: 100%;
  height: 4px;
  background-color: var(--lightBlue);
}
</style>
