<template>
  <section @click="toggleOverlay" class="overlay">
    <div @click.stop class="overlayInner">
      <formComp class="overlayInner__Form" />
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      toggleOverlay: "toggleForm"
    })
  }
};
</script>

<style lang = "scss">
.overlay {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;

  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlayInner {
  background-color: white;
  padding: 3rem;
  border-radius: 2rem;
  overflow:scroll;
  max-height:90vh;
}

.overlayInner__Form form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .formComp__input {
    width:100%;

    input[type="text"],textarea {
      width:100%;
    }

    textarea {
      min-height: 5rem;
    }
  }
}
</style>
