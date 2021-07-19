<template>
  <section class="insurance">
    <div class="insurance__row">
      <div class="insurance__row__col">
        <h4>{{ content.heading }}</h4>
        <p>{{ content.text }}</p>
      </div>
      <div class="insurance__row__col">
        <img
          :key="i"
          v-for="(image, i) in content.images"
          :src="$urlFor(image)"
          alt=""
        />
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
  }
};
</script>

<style lang="scss" scoped>
.insurance {
  background-color: rgb(245, 249, 249);
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

.insurance__row__col {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    img {
        width:25%;
        background-color:white;
    }
}
</style>
