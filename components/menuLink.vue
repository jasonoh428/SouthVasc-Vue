<template>
  <div
 
    class="linkWrapper"
 
  >

  <div  class = "link__Top" >
    <span :aria-selected = "expanded" @click="toggleExpand()" v-if = " typeof(link.children) != 'undefined' " class="expand">
      +
    </span>
    <!--Internal Link-->
    <nuxt-link 
    v-if="link.internal && link.slug"
      class="menuLink"
      :to="'/' + link.slug"
     
      >{{ link.display }}</nuxt-link
    >

        <!--Container Link -->
    <div class="menuLink" v-else-if="link.internal && !link.slug">
      {{ link.display }}
    </div>

    <!---External Link--->
    <a class="menuLink" v-else :href="link.file.asset.url">{{ link.display }}</a>

     </div>
   



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
        <a class="menuLink childLink" v-else :href="link.file.asset.url">{{ link.display }}</a>
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

   watch: {
    '$route.fullPath' : function() {
      this.expanded = false;
    }
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
  padding-top: 2rem;
  padding-bottom: 2rem;

  position: relative;

  @include desktop {
    padding-left: 0;
    padding-right: 0;
  }
}

.link__Top {
  display: flex;
  flex-direction: row;
  align-items: center;
  height:100%;
  justify-content: flex-start;
}

.expand {
  white-space: nowrap;
  color: var(--link);
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: .5rem;
  
  font-weight: bold;
  display: block;

 

  &[aria-selected = "true"] {
    transform:rotate(45deg)
  }


}

.menuLink {
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.1rem;
  margin-right: 2rem;
  color: var(--link);
}

.link__children {
  height: 0;
  overflow: hidden;
  transition: all 0.5s;

  &[aria-expanded="true"] {
    height: auto;
    z-index:100;
    overflow: visible;
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
