<template>
  <section class="locations">
    <div
      :key="i"
      v-for="(location, i) in content.locations"
      class="location__wrapper"
    >
      <div class="location map-responsive" v-html="location.mapEmbed"></div>
      <a class = "mapLink" :href="'tel:' + location.phoneAppt">{{location.phoneAppt}}</a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },

  mounted() {
    console.log(this.$props.content);
  }
};
</script>

<style lang="scss">
.locations {
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;
  width: 90vw;
  @include center;
  justify-content: space-between;

  .location__wrapper {
    width: 15%;
    margin: 0 0 6px;
    height: 190px;

    
    iframe {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.mapLink {
    color:var(--lightBlue);
    display: block;
    text-decoration: none;
    font-size:2rem;
    padding:1rem;
    text-align: center;
    border:1px solid var(--lightBlue);
}
</style>
