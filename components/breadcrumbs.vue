<template>
  <div class="breadcrumbs">
    <nuxt-link to="/">Southern Vascular of Panama City, LLC</nuxt-link>

    <div
      v-for="(crumb, i) in breadcrumbs.breadcrumbs"
      :key="i"
      class="breadcrumb__Dynamic"
    >
      <p> > </p>
      <nuxt-link v-if = "crumb.link" :to="'/' + crumb.link.slug.current">
        {{ crumb.displau }}
      </nuxt-link>

      <a v-else href="">   {{ crumb.displau }}</a>
    </div>

    <p> > </p>

    <nuxt-link :to="slug">{{ title }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
      breadcrumbs: {
          type:Array,
          default:[],
          required:false
      },

      title: {
          type:String,
          required:false
      },

      slug: {
          type:String,
          required:false
      }
  },

  mounted() {
    console.log(this.breadcrumbs);
  },

  
};
</script>

<style lang = "scss">

.breadcrumbs {
    padding-top: 2rem;
    padding-right: 2rem;
    * {
        display:inline-block;
        text-decoration: none;
        font-size:1.4rem;
    }

    @include desktop {
        padding-top: 0;
    }
}
</style>
