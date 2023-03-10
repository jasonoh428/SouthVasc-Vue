<template>
  <div>
    <section class="insurance">
      <div class="insurance__row">
        <div class="insurance__row__col">
          <h4>{{ content.heading }}</h4>
          <p>{{ content.text }}</p>
        </div>
        <div class="insurance__row__col">
          <img :key="i" v-for="(image, i) in content.images" :src="$urlFor(image)" alt="" />
        </div>
      </div>
    </section>

    <h2 class="latestNews">Latest News</h2>

  </div>
</template>

<script>
// import latestNews from "~/components/latestNews.vue";
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },

  // components: { latestNews },
};
</script>

<style lang="scss" scoped>
.insurance {
  background-color: rgb(245, 249, 249);
  margin-bottom: 30px;
}

.insurance__row {
  @include maxWidth;
  @include center;

  padding: 6rem 0;


  @include desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.insurance__row__col {
  @include desktop {
    width: 50%;
    padding: 1rem;
  }
}


.latestNews {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
  font-weight: 500;

  @include maxWidth;
  @include center;

  padding-top: 20px;
  padding-bottom: 20px;

  h2 {
    @include h2;


    @include desktop {
      margin-top: 0;
    }
  }

}

.insurance__row__col {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    width: 25%;
    background-color: white;
  }
}
</style>
