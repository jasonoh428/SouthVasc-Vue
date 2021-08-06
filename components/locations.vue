<template>
  <section class="locations">
    <div
      :key="i"
      v-for="(location, i) in content.locations"
      class="location__wrapper"
    >
      <div class="location map-responsive" v-html="location.mapEmbed"></div>

      <div class="location__Details">
        <a class="mapLink" :href="'tel:' + location.phoneAppt">{{
          location.phoneAppt
        }}</a>

        <overlayButton :display = "'REQUEST APPOINTMENT'"/>
      </div>
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
  justify-content: center;
  flex-wrap: wrap;


  .location__wrapper {

    width:100%;

    @include desktop {
       width: 30%;

    }
   
    padding:.5rem;
    margin:.5rem;

    
    margin-bottom: 3rem;

-webkit-box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.16); 
box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.16);

    iframe {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.location__Details {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding:1rem;
  

  * {
    font-size:1.4rem !important;
    display: block;
    border-radius:0;
    flex:1;
    text-align: center;
    margin: 0;
  }
}

.mapLink {
  color: var(--lightBlue);
  display: block;
  text-decoration: none;
  line-height: 100%;;
  padding: .5rem;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--lightBlue);
}
</style>
