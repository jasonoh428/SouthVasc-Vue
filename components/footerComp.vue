<template>
  <footer class="footer">
    <div v-for="(location, i) in footer" :key="i" class="footer__Container">
      <p>{{ location.title }}</p>
      <div class = "footer__Container__phones">
        <p>Phone (appointments): {{location.phoneAppt}}</p> 
        <p>Phone (general inquiries): {{location.phoneGeneral}}</p>
      </div>
      <p>Address {{location.address}}</p>
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
    width: 40%;
  }
}
</style>
