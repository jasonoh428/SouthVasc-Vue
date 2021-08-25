<template>
  <footer class="footer">
    <p class = "footer__Top">
      <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link> 
      
       <nuxt-link to="/terms-and-conditions">Terms &
      Conditions</nuxt-link> 

     <!-- <nuxt-link to = "/">Accessibility Notice</nuxt-link>-->


      <nuxt-link to = "/contact">Contact Us</nuxt-link>
      
        
    </p>
    <div v-for="(location, i) in footer" :key="i" class="footer__Container">
      <p>{{ location.title }}</p>
      <div class="footer__Container__phones">
        <p>Phone (appointments): {{ location.phoneAppt }}</p>
        <p>Phone (general inquiries): {{ location.phoneGeneral }}</p>
      </div>
      <p>Address {{ location.address }}</p>
    </div>
  </footer>
</template>

<script>
import { footerQuery } from "~/utils/queries.js";
export default {
  data() {
    return {
      footer: {}
    };
  },

  mounted() {
    console.log(this.footer);
  },

  async fetch() {
    this.footer = await this.$sanity.fetch(footerQuery);
  }
};
</script>

<style lang="scss">
.footer {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: var(--darkBlue);

  color:white;
  
}

.footer__Top {
  margin-bottom: 5rem;
  text-align: center;

  a {
    color:white;
    text-decoration: none;
    text-align: center;
    margin: 1rem;
  }
}

.footer__Container__phones {
  display: flex;
  flex-direction: row;
  justify-content: center;

  p {
    margin-right: 1rem;
    margin-left: 1rem;
  }
}

.footer__Container {
  margin-bottom: 4rem;
  text-align: center;
  @include maxWidth;
  @include center;
  p,
  a {
    color: white;
  }

  @include desktop {
    width: 60%;
  }
}
</style>
