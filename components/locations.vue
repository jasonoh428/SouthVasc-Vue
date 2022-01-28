<template>
  <section class="locations">
    <div
      :key="i"
      v-for="(location, i) in content.locations"
      class="location__wrapper"
    >
      <figure class="location_image ">
        <SanityImage :asset-id="location.locationImage.asset._ref" v-if="location.locationImage && location.locationImage.asset" format="auto" class="location_image_img" />
      </figure>

      <div class="location__Details">

        <p class = "location__Address">{{location.address}}</p>
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
.location_image {
  aspect-ratio: 16/9;
  overflow: hidden;
}
.location_image_img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
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
    display: flex;
    flex-direction: column;

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
  flex:1;
  flex-wrap: wrap;

  align-content: space-between;


  *:not(p) {
    font-size:1.4rem !important;

    border-radius:0;
    flex:1;
    text-align: center;
    margin: 0;
    vertical-align: middle;
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

.location__Address {
  width:100%;
  text-align: center;

}
</style>
