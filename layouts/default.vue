<template>
  <div>
    <navBar/>
    <Nuxt />

    <footerComp/>

  

  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.colorMode {
  cursor: pointer;
  color:var(--greyText);
  background-color:var(--lightBlue);
  position: fixed;
  bottom:1rem;
  border-radius:50%;
  height:3rem;
  width:3rem;
  right:1rem;
}
</style>

<script>
export default {
  methods: {
    switchColor() {
      this.$colorMode.preference === 'light' ? this.$colorMode.preference = 'dark' : this.$colorMode.preference = 'light'
    }
  }
}
</script>

