<template>
  <section class="blogSection">
    <!--Card-->
    <slot></slot>
    <div v-for="(blog, i) in this.$route.name == 'index' ? content.blogs.slice(0,3) : content.blogs" :key="i" class="blogCard">
      <nuxt-link :to="'/blogs/' + blog.slug">{{ blog.title }}</nuxt-link>
      <p>{{ blog.excerpt }}</p>
      <p>{{ blog.date }}</p>
    </div>

    <a href="/blog" class="textButton" v-if="this.$route.name == 'index'">More News</a>

  </section>
</template>

<script>
export default {
  props: {
    content: {
      required: true,
      type: Object
    }
  },

};
</script>

<style lang="scss" scoped>
.blogSection {
  margin-top: 2rem;
  @include maxWidth;
  @include center;

  @include desktop {
    display: flex;
    flex-wrap: wrap;

    margin-top: 8rem;
    margin-bottom: 8rem;
    justify-content: space-between;
    flex-direction: row;
  }
}

.blogCard {

  margin-bottom: 5rem;

  a {
    color: var(--lightBlue);
    font-size: 2rem;
    text-decoration: none;
    display: block;
    margin-bottom: 1rem;
  }

  @include desktop {
    width: 33%;
    padding: 0 1rem;
  }
}

.textButton {
  text-decoration: underline;
  font-size: 18px;
}
</style>
