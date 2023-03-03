<template>
    <section class="formComp">
      <form id="appointmentForm" class="formComp__Form" name="appointment" method="POST" @submit.prevent="handleSubmit" netlify data-netlify="true">
        <input type="hidden" name="form-name" value="appointment" />
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
  
          <!--Radio-->
  
          <div class="input__Radio" v-if="input.type === 'radio'">
            <div class="form__Radio" v-for="(radio, i) in input.options" :key="i">
              <input
                :name="input.name"
                type="radio"
                :value="radio.value"
                :id="radio.id"
              />
  
              <label :for="radio.id">{{ radio.display }}</label>
            </div>
          </div>
        </div>
  
        <!--Final Required-->
  
        <div class="agreement">
          <input required="true" name="agreement" type="checkbox" />
          <label for="agreement">
            I have read and agreed to the
            <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link> and
            <nuxt-link to="/terms-and-conditions">Terms of Use</nuxt-link> and I
            am at least 18 and have the authority to make this appointment.</label
          >
        </div>
  
        <input class="button button--Blue" value="submit" type="submit" />
      </form>
    </section>
  </template>
  
  <script>
  import thankYouAppointment from '../pages/thankYouAppointment'
  import VueRouter from 'vue-router'
  
  const router = new VueRouter({
    routes: [
      { path: "/thankYouAppointment", component: thankYouAppointment }
    ]
  })
  
  
  export default {
    data() {
      return {
        form: [
          {
            name: "visitType",
            type: "radio",
            display: "Visit Type",
            options: [
              {
                id: "In-Office Visit",
                value: "In-Office Visit",
                display: "In-Office Visit"
              },
  
              {
                id: "Virtual Visit",
                value: "Virtual Visit",
                display: "Virtual Visit"
              }
            ]
          },
  
          {
            name: "returning?",
            type: "radio",
            display: "Are you a new or returning patient",
            options: [
              {
                id: "New",
                value: "New",
                display: "New"
              },
  
              {
                id: "Returning",
                value: "Returning",
                display: "Returning"
              }
            ]
          },
  
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
            name: "sex",
            type: "radio",
            display: "Sex (Optional)",
            options: [
              {
                id: "male",
                value: "male",
                display: "Male"
              },
  
              {
                id: "female",
                value: "female",
                display: "Female"
              },
  
              {
                id: "other",
                value: "other",
                display: "Other"
              }
            ]
          }
        ]
      };
    },
  
    methods: {
      handleSubmit(event) {
        let form = document.getElementById('appointmentForm')
        let formData = new URLSearchParams(new FormData(form))
        function encode(data) {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
        } 
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            formData
          }),
        })
        .then(() => this.$router.push("/thankYouAppointment"))
        .catch((error) => alert(error));
      }
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
    margin-bottom: 1rem;
  
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
    cursor: pointer;
    margin-left: 1rem;
  }
  
  .input__Radio {
    display: flex;
    flex-direction: row;
  }
  
  .form__Radio {
    display: flex;
    flex-direction: row;
  
    margin-top: 0.5rem;
  
    input {
      margin-right: 1rem;
    }
    margin-right: 1rem;
  }
  
  .agreement {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    padding: 1rem;
  
    justify-content: space-between;
  
    a {
      text-decoration: none;
    }
  
    input[type="checkbox"] {
      width: auto;
      margin-right: 5rem;
    }
  
    label {
      flex: 1;
    }
  }
  </style>
  