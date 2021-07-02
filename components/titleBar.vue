<template>
  <div >
    <h2 class = "titleBar__text">{{ title }}</h2>
    <hr  class="titleBar"/>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss">

.titleBar__text {
    margin-bottom: 0 !important;
}
.titleBar {
    background-color: var(--greyText);
    height: 1px;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>
