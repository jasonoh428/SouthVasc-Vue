<template>

<section :aria-expanded = "opened" class = "navOuter">
    <!--<div class="navTop">Now accepting <nuxt-link to = "/telehealth">Telehealth</nuxt-link> appointments. <nuxt-link to = "/schedule">Schedule a virtual visit.</nuxt-link> </div>-->
    <div class="navTop"> Call us today at <a href = "tel:8505326303">850-532-6303</a> </div>
  <nav class = "nav" v-if = "!$fetchState.pending">

  
    <div @click = "opened = !opened" :aria-selected = "opened" class="hamburger">
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
    </div>
    <div :class = "!opened ? 'navHidden' : ''" class="navLinks">
      <menuLink :link="link" v-for="(link, i) in menu.links" :key="i" />

      
    </div>

      <nuxt-link :class = "!opened ? 'navHidden' : 'showButton'" class = "button nav__button button--Green" :to = "menu.button.slug">{{menu.button.title}}</nuxt-link>
      <overlayButton :class = "!opened ? 'navHidden' : 'showButton'" class = "nav__button" :display = "'Request Appointment'"/>
  </nav>
</section>
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
