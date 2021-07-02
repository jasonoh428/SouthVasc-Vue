<template>
  <div class="starTestimonial">
    <div class="star__Person">
      <span>{{ testimonial.name }}</span>

      <div class="star__starWrapper">
        <div
          :key="i"
          class="star__Star"
          v-for="(star, i) in testimonial.starts"
        ></div>
      </div>
      <p>Submitted: {{ testimonial.date }}</p>
    </div>

    <div class="testimonial__Text">
      <p>{{ testimonial.review }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.star__starWrapper {
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.testimonial__Text {
  flex: 2;
  padding: 3rem;
  border: 4px solid var(--greyText);
}

.star__Person {
  flex: 1;
  display: flex;
  flex-direction: column;

  span {
    font-size: 3rem;
    color: var(--greyText);
    font-weight: bold;
  }
}

.star__Star {
  background-color: #eddf4e;
  height: 2rem;
  width: 2rem;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.starTestimonial {
  width: 100%;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;

  @include desktop {
    flex-direction: row;

    justify-content: space-between;
  }
}
</style>
