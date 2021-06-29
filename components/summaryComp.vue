<template>
  <section class="preBody">
    <div class="identity">
      <h2>Southern Vascular of Panama City, LLC</h2>
      <h3>
        Board Certified Vascular and Endovascular Surgeon located in Panama
        City, Panama City Beach, Port St. Joe, Santa Rosa, & Chipley, FL
      </h3>
    </div>

    <div class="summary">
      <sanity-content :blocks="content.text"></sanity-content>
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
  }
};
</script>

<style lang="scss">
.preBody {
  @include center;
  @include maxWidth;

  @include desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
  }
}

.identity {
  margin-bottom: 1rem;

  @include desktop {
    width:32%;
    text-align: center;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  h2 {
    @include h2;

    @include desktop {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 1.4rem;
    line-height: 120%;
    padding: 0;
    color: #333;
    font-weight: normal;
    font-family: "open_sansregular", arial, sans-serif;
  }
}

.summary {
  @include desktop {
    width:62%;
  }
}
</style>
