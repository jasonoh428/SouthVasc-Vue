<template>

<section :aria-expanded = "opened" class = "navOuter">
    <div class="navTop">Now accepting <nuxt-link to = "/telehealth">Telehealth</nuxt-link> appointments. <nuxt-link to = "/schedule">Schedule a virtual visit.</nuxt-link> </div>
  <nav class = "nav" v-if = "!$fetchState.pending">

  
    <div @click = "opened = !opened" :aria-selected = "opened" class="hamburger">
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
    </div>
    <div :class = "!opened ? 'hideNav' : ''" class="navLinks">
      <menuLink :link="link" v-for="(link, i) in menu.links" :key="i" />

      
    </div>

      <nuxt-link :class = "!opened ? 'hideNav' : 'showButton'" class = "button nav__button button--Green" :to = "menu.button.slug">{{menu.button.title}}</nuxt-link>
      <overlayButton :class = "!opened ? 'hideNav' : 'showButton'" class = "nav__button" :display = "'Request Appointment'"/>
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

  mounted() {
    console.log(this.menu)
  }
};
</script>

<style lang="scss" >
.navLinks {

  @include desktop {
    display: flex !important;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
    position: relative;
    height:initial
    
  }
}


.navOuter {
   position: fixed;
   z-index:100;
   background-color:white;
   width:100%;
   

   

   &[aria-expanded = "true"] {
     height:100vh;
     overflow-y:scroll;
     @Include desktop {
       height:initial
     }
   }

   
}

.nav {
  @include desktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-left: 1rem;
    padding-right: 1rem;

   

    .button {
      margin: 0;
      margin-left: 1rem;
      margin-bottom: 1rem;
      vertical-align: middle
    }
  }
}

.navTop {
  @include maxWidth;
  @include center;
  text-align: center;
  padding-top: 1rem;

  font-size:1.6rem;

 

    
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

.hideNav.button {
  @include desktop {
    display: inline-block;
  }
}

.hamburger__line {
  width: 100%;
  height: 4px;
  background-color: var(--lightBlue);
}

.nav__button {
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  font-size:1.1rem;
  padding:1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
;
  
}

.showButton {

  display: block;


  @include desktop {
    display: block  !important;
  }
}
</style>
