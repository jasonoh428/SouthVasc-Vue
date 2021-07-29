<template>
  <section class="overlay">
      <formComp/>
  </section>
</template>

<script>

export default {

}
</script>

<style>

.overlay {
    height:100%;
    width:100%;
    background-color:rgba(0, 0, 0, .7);
    position: fixed;

    z-index:100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>