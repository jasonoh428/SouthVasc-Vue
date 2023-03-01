<template>

<section :aria-expanded = "opened" class = "navOuter">
    <!--<div class="navTop">Now accepting <nuxt-link to = "/telehealth">Telehealth</nuxt-link> appointments. <nuxt-link to = "/schedule">Schedule a virtual visit.</nuxt-link> </div>-->
  <div class="navTop"> Call us today at <a href = "tel:8505326303">850-532-6303</a> </div>
  
  <nav class = "nav" v-if = "!$fetchState.pending">

    <div class="menuWrapper">
    <div class="logo">
      <a href="/#"><img class="logoImage" src="SVPC.png"/></a>
    </div>
  
    <div class="navMenu">
      <div @click = "opened = !opened" :aria-selected = "opened" class="hamburger">
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
      </div>

      <div :class = "!opened ? 'navHidden' : ''" class="navLinks">
        <menuLink :link="link" v-for="(link, i) in menu.links" :key="i" v-if="menu.links" />
      </div>

        <nuxt-link :class = "!opened ? 'navHidden' : 'showButton'" class = "button nav__button button--Green" :to = "menu.button.slug">{{menu.button.title}}</nuxt-link>
        <overlayButton :class = "!opened ? 'navHidden' : 'showButton'" class = "nav__button" :display = "'Request Appointment'"/>
      </div>
    </div>
  </nav>
</section>
</template>

<style scoped>
.menuWrapper{
  display:flex;
  width:100vw;
}

.logo{
  margin-right: auto;
}

.logoImage{
  height: 70px;
  margin-right: auto;
}

.navMenu{
  display:flex;
  flex-wrap: wrap;
  height:10vh;
  /* align-items: flex-end; */
  margin: auto;
}

</style>

<script>
import { navQuery } from "~/utils/queries.js";
export default {
  data() {
    return {
      menu: {},
      opened:false
    };
  },

  watch: {
    '$route.fullPath' : function() {
      this.opened = false;
    }
  },

  async fetch() {
    this.menu = await this.$sanity.fetch(navQuery);
  },


};
</script>
