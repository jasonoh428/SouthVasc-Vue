<template>
  <img
    class="inlineImage"
    :style="{ '--width': width + '%', '--float': float }"
    :src="$urlFor(image)"
    alt=""
  />
</template>

<script>
export default {
  props: ["image", "width", "float"],
  
};
</script>

<style lang="scss">
.inlineImage {
  padding-left: 2rem;
  padding-right: 2rem;
  float: var(--float);
  width: var(--width);
}
</style>
