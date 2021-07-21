<template>
  <div
 
    class="linkWrapper"
 
  >
    <span :aria-selected = "expanded" @click="toggleExpand()" v-if="link.children" class="expand">
      +
    </span>
    <!--Internal Link-->
    <nuxt-link
      class="menuLink"
      :to="'/' + link.slug"
      v-if="link.internal && link.slug"
      >{{ link.display }}</nuxt-link
    >

    <!--Container Link -->
    <div class="menuLink" v-else-if="link.internal && !link.slug">
      {{ link.display }}
    </div>

    <!---External Link--->
    <a class="menuLink" v-else href="">{{ link.display }}</a>

    <!--Child Links-->
    <div :aria-expanded="expanded" v-if="link.children" class="link__children">
      <div v-for="(link, i) in link.children" :key="i" class="childLinkWrapper">
        <!--Internal Link-->
        <nuxt-link
          class="menuLink childLink"
          :to="link.slug"
          v-if="link.internal && link.slug"
          >{{ link.display }}</nuxt-link
        >

        <!--Container Link -->
        <div class="menuLink childLink" v-else-if="link.internal && !link.slug">
          {{ link.display }}
        </div>

        <!---External Link--->
        <a class="menuLink childLink" v-else href="">{{ link.display }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      required: true,
      type: Object
    }
  },

  data() {
    return {
      expanded: false
    };
  },

  methods: {
    toggleExpand() {
      console.log("toggled");
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
.linkWrapper {
  padding: 2rem;

  position: relative;

  @include desktop {
    padding-left: 0;
    padding-right: 0;
  }
}

.expand {
  color: var(--link);
  cursor: pointer;
  font-size: 1.3rem;
  margin-right: .5rem;
  font-weight: bold;
  display: inline-block;

  &[aria-selected = "true"] {
    transform:rotate(45deg)
  }


}

.menuLink {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.3rem;
  margin-right: 4rem;
  color: var(--link);
}

.link__children {
  height: 0;
  overflow: hidden;
  transition: all 0.5s;

  &[aria-expanded="true"] {
    height: auto;
  }
  @include desktop {
    width: 300px;

    transform: translateY(100%);
    background-color: var(--bg);
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.childLink {
  margin-left: 1rem;
  font-size: 1.3rem;
  @include desktop {
    padding: 1.5rem;
    width: 100%;
    border-bottom: 1px solid var(--greyText);
  }
}
</style>
