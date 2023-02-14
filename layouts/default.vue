<template>
  <div class="wrapper">
    <overlay v-if="form" />
    <navBar />
    <Nuxt />

    <footerComp />

    <form
      hidden
      name="appointment"
      netlify
      method="post"
      action="/thank-you-appointment"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="appointment" />

      <input
        name="visitType"
        type="radio"
        id="In-Office Visit"
        value="In-Office Visit"
      />
      <input
        name="visitType"
        type="radio"
        id="Virtual Visit"
        value="Virtual Visit"
      />

      <input name="returning?" type="radio" id="New" value="New" />

      <input name="returning?" type="radio" id="Returning" value="Returning" />
      <input name="name" type="text" />
      <div class="formComp__input">
        <label for="location" class="labelStandard">Location</label>
        <!---->
        <!---->
        <select name="location"
          ><option value="Jenks Ave, Panama City, FL"
            >Jenks Ave, Panama City, FL</option
          ><option value="Panama City Beach Parkway, Panama City Beach, FL"
            >Panama City Beach Parkway, Panama City Beach, FL</option
          ><option value="20th Street, Port St. Joe, FL"
            >20th Street, Port St. Joe, FL</option
          ><option value="Hwy 98, Santa Rosa Beach, FL"
            >Hwy 98, Santa Rosa Beach, FL</option
          ><option value="South boulevard, Bonifay/Chipley, FL"
            >South boulevard, Bonifay/Chipley, FL</option
          ></select
        >
        <!---->
        <!---->
      </div>
      <div class="formComp__input">
        <label for="email" class="labelStandard">Email Address</label>
        <input name="email" type="text" />
        <!---->
        <!---->
        <!---->
        <!---->
      </div>
      <div class="formComp__input">
        <label for="phone" class="labelStandard">Phone Number</label>
        <input name="phone" type="text" />
        <!---->
        <!---->
        <!---->
        <!---->
      </div>
      <div class="formComp__input">
        <label for="comments" class="labelStandard">Comments</label>
        <!---->
        <!---->
        <!---->
        <textarea name="comments"></textarea>
        <!---->
      </div>
      <div class="formComp__input">
        <label for="sex" class="labelStandard">Sex (Optional)</label>
        <!---->
        <!---->
        <!---->
        <!---->
        <div class="input__Radio">
          <div class="form__Radio">
            <input name="sex" type="radio" id="male" value="male" />
            <label for="male">Male</label>
          </div>
          <div class="form__Radio">
            <input name="sex" type="radio" id="female" value="female" />
            <label for="female">Female</label>
          </div>
          <div class="form__Radio">
            <input name="sex" type="radio" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
      </div>
      <div class="agreement">
        <input required="required" name="agreement" type="checkbox" />
        <label for="agreement">
          I have read and agreed to the
          <a href="/privacy-policy" class="">Privacy Policy</a> and
          <a href="/terms-and-conditions" class="">Terms of Use</a> and I am at
          least 18 and have the authority to make this appointment.</label
        >
      </div>
      <input value="submit" type="submit" class="button button--Blue" />
    </form>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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
  color: var(--greyText);
  background-color: var(--lightBlue);
  position: fixed;
  bottom: 1rem;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  right: 1rem;
}

.wrapper {
  position: relative;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    switchColor() {
      this.$colorMode.preference === "light"
        ? (this.$colorMode.preference = "dark")
        : (this.$colorMode.preference = "light");
    }
  },

  computed: {
    ...mapState({
      form: "formIsOpened"
    })
  }
};
</script>
