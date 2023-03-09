<template>
  <section class="latestNews">
    <h2>Latest News</h2>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.latestNews {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @include maxWidth;
  @include center;

  padding-top: 20px;
  padding-bottom: 20px;

  p {
    font-family: "open_sanssemibold", arial, sans-serif;
    letter-spacing: 2px;
    font-weight: 600;
    margin-bottom: 18px;
    text-transform: uppercase;

    @include desktop {
      margin-top: 4rem;
      width: 100%;
      text-align: center;
    }
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 3.6rem;
    color: gray;

    @include desktop {
      width: 100%;
      text-align: center;
    }
  }

  h2 {
    @include h2;

    @include desktop {
      margin-top: 0;
    }
  }


  @include desktop {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 5rem;
  }
}

.mainWrapper {
  background-color: #f9f7f5;
}
</style>
