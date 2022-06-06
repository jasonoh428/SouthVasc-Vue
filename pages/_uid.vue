<template>
  <section class="page">
    <div class="pageTitle">
      <h1>{{ page.headerTitle ? page.headerTitle : page.title }}</h1>
    </div>

    <div class="pageInfo">
      <breadcrumbs :breadcrumbs = "page.breadcrumbs" v-if="page.breadcrumbs" :slug="page.slug.current" :title="page.title" />
      <div v-if = "page.socials" class="pageSocials">
        <iframe
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FSouthern-Vascular-of-Panama-City-321683894686825%2F&width=150&layout=button_count&action=like&size=small&share=true&height=46&appId"
          width="150"
          height="46"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        <div>
          <a
            class="twitter-share-button"
            href="https://twitter.com/intent/tweet"
          >
            Tweet</a
          >
        </div>

        <div>
          <a
            data-pin-do="buttonBookmark"
            href="https://www.pinterest.com/pin/create/button/"
          ></a>
        </div>
      </div>
    </div>
    <contentZone :content="page.content" />
  </section>
</template>

<script>
import { pageQuery } from "~/utils/queries.js";
import contentZone from "~/components/contentZone.vue";
import richText from "~/components/richText.vue";
export default {
  components: {
    contentZone,
    richText
  },
  async asyncData({ params, $sanity }) {
    const page = await $sanity.fetch(pageQuery(params.uid));
    return { page };
  },

  data() {
    return {
      pinterest: false
    };
  },

  watch: {
    pinterest() {
      window.buildPinterest();
    }
  },

  mounted() {

    twttr.widgets.load();


    if (typeof window.buildPinterest === "function") {
      window.buildPinterest();
    }
  },

  head() {
    let scripts = [];
console.log(this.$route.params.uid)
if(this.$route.params.uid.includes('varicose-veins-specialist')){

scripts.push({
hid: 'ld-schema',
type: "application/ld+json",
innerHTML: `

{

"@context": "https://schema.org",

"@type": "FAQPage",

"mainEntity": [{

"@type": "Question",

"name": "What are varicose veins?",

"acceptedAnswer": {

"@type": "Answer",

"text": "Varicose veins are thick, rope-like veins that are usually red, purple, or blue. They can occur anywhere, but they’re especially common on the legs, thighs, and calves.



The veins in your legs work hard to return blood to your heart. Over time, this process can cause your vein valves to weaken and malfunction.



If your vein valves don’t close as they should, your blood can flow backward and pool. This pooling results in varicose veins."

}

},{

"@type": "Question",

"name": "What are the symptoms of varicose veins?",

"acceptedAnswer": {

"@type": "Answer",

"text": "The symptoms of varicose veins vary. For some people, varicose veins present no obvious symptoms. Other times, they cause:



An achy or heavy feeling in the legs

Burning, throbbing, or muscle cramping

Worsened pain after sitting or standing

Skin discoloration

Itching



As varicose veins grow, you might also experience discomfort while running, walking, or participating in other types of exercise."

}

},{

"@type": "Question",

"name": "Who is at risk of getting varicose veins?",

"acceptedAnswer": {

"@type": "Answer",

"text": "Varicose veins affect people of all ages and races, but several factors may increase your risk, including:



Being middle-aged or older

Being a woman

Being overweight or obese

Being pregnant

Having a family history of varicose veins



Additionally, you’re more likely to experience varicose veins if you work a job that requires you to sit or stand for long periods of time."

}

},{

"@type": "Question",

"name": "How are varicose veins diagnosed?",

"acceptedAnswer": {

"@type": "Answer",

"text": "To diagnose varicose veins, Southern Vascular of Panama City, LLC conducts a physical exam, reviews your medical history, and asks about your symptoms and lifestyle.



During the exam, your provider asks you to stand up, sit down, and walk around the room. They also ask you to describe your pain on a scale of one to 10.



Your provider uses ultrasound imaging to determine if your vein valves are healthy and functioning at normal capacity."

}

},{

"@type": "Question",

"name": "How are varicose veins treated?",

"acceptedAnswer": {

"@type": "Answer",

"text": "Treatment for varicose veins depends on their size, location, severity, and your health history. Depending on your symptoms, Southern Vascular of Panama City, LLC might recommend:



Sclerotherapy

Sclerotherapy is a minimally invasive treatment that uses a chemical solution called a sclerant to irritate and close your varicose veins. The treatment is outpatient, meaning you can return home on the same day as your appointment.



Ultrasound-guided vein ablation

Ultrasound-guided vein ablation is a type of treatment used to address varicose veins deep beneath the surface of your skin. Your provider uses ultrasound imaging to pinpoint your veins. Afterward, they use an electrode to heat the vein, causing it to collapse and close.



Endovenous radiofrequency ablation

Endovenous radiofrequency ablation is similar to ultrasound-guided ablation. The only difference is that it uses radiofrequency technology instead of ultrasound waves. This minimally invasive treatment is particularly beneficial for visible varicose veins near the surface of your skin.



Don’t let varicose veins prevent you from living your best life. Schedule an appointment for pain-free treatment at Southern Vascular of Panama City, LLC. Call the office or book a consultation online today."

}

}]

}

`

})

}

if(this.$route.params.uid.includes('frff')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      // put everyting
  
  `
})

}
    return {
      script: 
      [
        ...scripts,
        {
          type: "text/javascript",

          defer: true,
          vmid: "pinterest",
          "data-pin-build": "buildPinterest",
          callback: () => (this.pinterest = true),

          src: "//assets.pinterest.com/js/pinit.js"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.pageTitle {
  background-color: var(--lightBlue);
  min-height: 100px;

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

.pageInfo {
  @include maxWidth;
  @include center;

  padding-top: 2rem;

  display: flex;
  flex-direction: column;

  @include desktop {
      align-items: center;
      flex-direction: row;
    justify-content: space-between;
  }
}

.pageSocials {
  display: flex;

  flex-direction: row;
  align-items: flex-start;

  *:not(iframe) {
    margin-right: 0.4rem;
  }
}
</style>
