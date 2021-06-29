<template>

<section class="imageRich">

    <img class = "imageRich__img" :src = "$urlFor(content.image)"/>
    <sanity-content class = "imageRich__text" :blocks = "content.text"/>
</section>
  
</template>

<script>
export default {

    props: {
        content: {
            type:Object,
            required:true
        }
    },

    mounted() {
        console.log(this.$props.content)
    }

}
</script>

<style lang = "scss" scoped>

.imageRich {
    @include maxWidth;
    @include center;

    border-top: 1px solid #acb4ba;
    padding-top: 2rem;
    padding-bottom: 2rem;

    @include desktop {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
}

.imageRich__img {
    display: block;
    @include desktop {
        flex:1;
        padding:2rem;
    }
}

.imageRich__text {
    @include desktop {
        flex:2;
        padding:2rem;
    }
}

</style>