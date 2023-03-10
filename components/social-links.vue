<template>
    <div class="mainWrapper">
        <div class="mainDiv">
            <h1>Follow us on Social Media</h1>
            <div class="starDiv">★★★★★</div>
            <div class="iconsDiv">
                <a href="https://www.facebook.com/SouthernVascularPC" target="_blank"><img class="fbImg" src="https://acadianavascular.com/wp-content/uploads/2021/01/72528-300x300.png"></a>
                <img class="instaImg" src="https://acadianavascular.com/wp-content/uploads/2021/01/72531-300x300.png">
            </div>
        </div>
    </div>
</template>

<style scoped>
.iconsDiv{
    width: 130px;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 10px;
}
.instaImg{
    float: right;
    height: 60px;
    width: 60px;
}
.fbImg{
    float: left;
    height: 60px;
    width: 60px;
}
.mainWrapper {
    background-color: #f9f7f5;
    min-height: 240px;
}
.mainDiv{
    max-height: 140px;
    padding-top: 50px;
    align-content: center;
    justify-content: center;
    text-align: center;
}
.starDiv{
    color: #ffe600;
    font-size: 28pt;
    line-height: 100%;
}
</style>

<script>
export default {
    name: 'SocialLink'
}
</script>