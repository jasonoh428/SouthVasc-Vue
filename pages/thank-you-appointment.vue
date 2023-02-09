<template>
    <section class="thankYouAppointment">
      <div class="pageTitle">
        <h1>Thank You!</h1>
      </div>
      <div class="thanksMessage">
        <h3>Thanks for requesting an appointment!</h3>
      </div>
    </section>
    </template>
    
    <style lang="scss" scoped>
      .pageTitle {
        background-color: var(--lightBlue);
        min-height: 100px;
        min-width: 100vw;
  
        padding-top: 15rem;
  
        @include desktop {
          padding-top: 10rem;
        }
  
        @include flexCenter;
  
        h1 {
          padding: 2rem;
          text-align: center;
          @include h1;
        }
      }
      .thankYouAppointment {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
  
        @include maxWidth;
        @include center;
  
        p {
          font-family: "open_sanssemibold", arial, sans-serif;
          letter-spacing: 2px;
          font-weight: 600;
          margin-bottom: 18px;
          text-transform: uppercase;
  
          @include desktop {
            margin-top: 4rem;
            width: 100%;
            text-align: center;
          }
        }
  
        h3 {
          margin-bottom: 2rem;
          font-size: 3.6rem;
  
          @include desktop {
            width: 100%;
            text-align: center;
          }
        }
  
        @include desktop {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 5rem;
        }
      }
  
      .thanksMessage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 50rem;
        text-align: center;
      }
  
    </style>