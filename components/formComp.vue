<template>
  <section class="formComp">
    <form class="formComp__Form" action="">
      <div class="formComp__input" v-for="(input, i) in form" :key="i">

        <!--Label-->
        <label class="labelStandard" :for="input.name">{{
          input.display
        }}</label>

        <!--Text-->
        <input :name="input.name" v-if="input.type === 'text'" type="text" />


<!--Checkbox-->
        <input
          :name="input.name"
          v-if="input.type === 'checkbox'"
          type="checkbox"
        />

<!--Select-->
        <select :name="input.name" v-if="input.type === 'select'">
          <option
            :value="option"
            v-for="(option, i) in input.options"
            :key="i"
            >{{ option }}</option
          >
        </select>
<!--Textarea-->
        <textarea :name="input.name" v-if="input.type === 'textarea'" />
      </div>

      <input class="button button--Blue" value="submit" type="submit" />
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: [
        {
          name: "name",
          type: "text",
          display: "Name"
        },

        {
          name: "location",
          display: "Location",
          type: "select",
          options: [
            "Jenks Ave, Panama City, FL",
            "Panama City Beach Parkway, Panama City Beach, FL",
            "20th Street, Port St. Joe, FL",
            "Hwy 98, Santa Rosa Beach, FL",
            "South boulevard, Bonifay/Chipley, FL"
          ]
        },

        {
          name: "email",
          type: "text",
          display: "Email Address"
        },

        {
          name: "phone",
          type: "text",
          display: "Phone Number"
        },

        {
          name: "comments",
          type: "textarea",
          display: "Comments"
        },

        {
          name: "disclaimer",
          type: "checkbox",
          display:
            "I understand and agree that any information submitted will be forwarded to our office by email and not via a secure messaging system. This form should not be used to transmit private health information, and we disclaim all warranties with respect to the privacy and confidentiality of any information submitted through this form."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.formComp {
  margin-bottom: 3rem;
  @include maxWidth;
  @include center;

  label {
    display: block;
    clear: both;
    color: #333;
    display: block;
    font-size: 12px;
    margin-bottom: 0.3rem;
    font-weight: 600;
    padding: 0;
    text-transform: uppercase;
  }

  input[type="text"],
  textarea,
  select {
    display: block;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    color: #555;
    display: block;
    font-size: 13px;
    height: 34px;
    line-height: 1.42857;
    padding: 6px 12px;
    width: 100%;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 8%) inset;
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    -ms-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    box-shadow: 0 1px 1px rgb(0 0 0 / 8%) inset;
    -webkit-transition: border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
    -moz-transition: border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
    -ms-transition: border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
    -o-transition: border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
    transition: border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
  }

  textarea {
    min-height: 20rem;
  }
}

.formComp__Form {
  @include desktop {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
.formComp__input {
  display: flex;
  margin-bottom: 2rem;

  padding: 1rem;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  @include desktop {
    width: 50%;
  }
}

input[type="checkbox"] {
  margin-top: 1rem;
  display: inline-block;
  margin-right: auto;
  border: 0;
  box-shadow: 0px;
  margin-left: 0;
  width: 100%;
}

input[type="submit"] {
  border: 0;
  border-radius: 0%;
  margin-left: 1rem;
}
</style>
