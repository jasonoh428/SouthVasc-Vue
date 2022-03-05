<template>
  <div class="groupImage">
    <img
      :src="$urlFor(image)"
      alt=""
      v-for="image in images"
      :key="image._key"
    />
  </div>
</template>

<script>
export default {
  props: ["images"]
};
</script>
<style>
.groupImage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}
.groupImage img {
  object-fit: cover;
}
</style>
