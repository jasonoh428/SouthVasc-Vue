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
import contentZone from "~/components/contentZone.vue";
import { pageQuery } from "~/utils/queries.js";
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

//Varicose Veins
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

//Endovenous radiofrequency ablation
if(this.$route.params.uid.includes('endovenous-radiofrequency-ablation-specialist')){
scripts.push({
  hid: 'ld-schema',
  type: 'application/ld+json',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is endovenous radiofrequency ablation?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Endovenous radiofrequency ablation is a minimally invasive, image-guided treatment used to address varicose veins.

Varicose veins are large purple, green, or blue veins that commonly appear on the legs. They occur when the vein valves in your legs stop working properly. This causes your blood to flow backward and pool. Over time, this pooling causes the veins to swell and become varicose.

Endovenous radiofrequency ablation uses radiofrequency energy to burn and destroy varicose veins while Venaseal uses an adhesive gel like material to permanently destroy the saphenous vein. Once treated, your veins collapse, and your blood reroutes to healthier veins throughout your body."
    }
  },{
    "@type": "Question",
    "name": "What symptoms can endovenous radiofrequency/gel ablation treat?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Endovenous radiofrequency ablation can address cosmetic imperfections and ease uncomfortable symptoms. Southern Vascular of Panama City, LLC uses endovenous radiofrequency ablation to ease symptoms like:

Aching or throbbing pain
Leg heaviness or fatigue
Swelling
Skin irritation
Venous ulcers
Skin discoloration

You might also benefit from endovenous radiofrequency ablation if you have swollen veins, a condition called phlebitis."
    }
  },{
    "@type": "Question",
    "name": "How do I prepare for endovenous radiofrequency/gel ablation?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Before endovenous radiofrequency ablation, Southern Vascular of Panama City, LLC conducts a physical exam, reviews your medical history, and asks about your symptoms and lifestyle. During this initial consultation, let your provider know about any prescription medications, vitamins, or nutritional supplements you regularly take.

On the day of your appointment, leave your jewelry at home and wear loose-fitting, comfortable clothing. You should also have a friend or family member drive you home following your appointment."
    }
  },{
    "@type": "Question",
    "name": "How does endovenous radiofrequency ablation work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Southern Vascular of Panama City, LLC, the team performs endovenous radiofrequency ablation in the office as an outpatient procedure. Most health insurance plans cover the treatment, which usually takes 15 minutes or less.

On the day of your appointment, you lie down on an exam table on your back or side. Then, your provider administers a local anesthetic to your legs, ensuring you’re comfortable throughout treatment. Once the anesthesia sets in, your provider uses an ultrasound to visualize your veins.

Next, they make a small opening and insert an catheter/electrode through it. The electrode heats up, causing your vein to collapse and close while the gel glues the vein wall together.. Afterward, your blood reroutes to healthier veins. Your provider repeats this process several times, treating each of your visible varicose veins.

Following treatment, your provider applies a bandage to each treatment area. You can walk out of the office and return to work the very next day.

To see if you’re a candidate for endovenous radiofrequency ablation, schedule an appointment at Southern Vascular of Panama City, LLC. Call the office or book a consultation online today."
    }
  }]
}
  
  `
  })
}

//Venous Ulcers
if(this.$route.params.uid.includes('venous-ulcers')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are venous ulcers?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Venous ulcers are slow-healing, open wounds that occur due to poor circulation. They can develop anywhere on your body but are especially common in the lower extremities like the legs and feet.

Dr. Gupta is wound care certified and the director of wound care at Gulf Coast Regional Medical Center. This experience and professional knowledge ensures each patient of Southern Vascular of Panama City, LLC, receives the best, most comprehensive care."
    }
  },{
    "@type": "Question",
    "name": "What are the symptoms of venous ulcers?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Venous ulcers usually form on the lower legs beneath the knees. Telltale signs of venous ulcers include:

Inflammation
Swelling
Aching
Itchy, hardened skin
Scabbing or flaking
Brown or black skin

As a venous ulcer grows, you might also notice pus or other liquid oozing from the wound."
    }
  },{
    "@type": "Question",
    "name": "Who is at risk of venous ulcers?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Venous ulcers occur due to poor circulation or damage to your veins. Some of the most common causes of venous ulcers include:

Diabetes
Varicose veins
High blood pressure
Trauma
Deep vein thrombosis (DVT)
Clotting disorders
Pregnancy

You’re also more likely to experience venous ulcers if you’re overweight or obese."
    }
  },{
    "@type": "Question",
    "name": "How are venous ulcers diagnosed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Southern Vascular of Panama City, LLC, diagnosis venous ulcers by conducting a thorough physical exam, reviewing your medical history, and asking about your symptoms and lifestyle.

Visual observation is usually enough to make a diagnosis. If your provider suspects you may have another underlying health problem, they might also order ultrasound imaging or lab tests."
    }
  },{
    "@type": "Question",
    "name": "How are venous ulcers treated?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Southern Vascular of Panama City, LLC, offers several types of treatment to address venous ulcers. Depending on the location and severity of your venous ulcers, they might recommend

Venous ablation/venous perforator therapy as stated above or:

Topical ointments or gels
If your ulcers are at risk of infection, your provider might recommend a topical ointment or gel to kill harmful bacteria and prevent further infection. Certain topical treatments can also complement your body’s natural healing process.

Prescription medications
If your ulcer is due to high blood pressure, high cholesterol, or another chronic condition, you might benefit from prescription medications like beta blockers, statins, or blood thinners. These medications can improve your cardiovascular health and lower the risk of clotting.

Wound dressings
If you have a venous ulcer that’s growing or at risk of infection, you might benefit from wound dressings. Medical-grade dressings protect your ulcer from harmful bacteria and other microorganisms. This allows your skin to scab over and heal.

Hyperbaric oxygen therapy
Hyperbaric oxygen therapy (HBO2) is a treatment used to speed up wound healing. It exposes you to levels of oxygen that are three times higher than the natural atmosphere. The more oxygen your blood can carry, the quicker venous ulcers can heal.

Dr. Gupta is the only vascular wound care specialist in the area with HBO2 certification.

To learn more about the various treatments for venous ulcers, schedule an appointment at Southern Vascular of Panama City, LLC. Call the office nearest you, or book a consultation online today."
    }
  }]
}
  
  `
})
}

//Sclerotherapy
if(this.$route.params.uid.includes('sclerotherapy')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is sclerotherapy?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sclerotherapy is an outpatient procedure used to treat varicose veins and spider veins. During sclerotherapy, your Southern Vascular of Panama City, LLC provider injects a chemical solution called a sclerant into one or more veins.

The sclerant causes your veins to swell, shrink, and collapse. When this process occurs, your blood reroutes to healthier veins throughout your body. This type of treatment is quick, pain-free, and provides long-lasting results."
    }
  },{
    "@type": "Question",
    "name": "What conditions can sclerotherapy treat?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sclerotherapy is incredibly versatile. Southern Vascular of Panama City, LLC uses sclerotherapy to treat:

Varicose veins
Spider veins
Malformed lymph vessels
Hydroceles

You might also benefit from sclerotherapy if you have hemorrhoids. Hemorrhoids are a type of blood vessel located around the rectum. If they become swollen or irritated, they can make sitting or using the restroom uncomfortable."
    }
  },{
    "@type": "Question",
    "name": "Am I a good candidate for sclerotherapy?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Only a qualified vein specialist like those at Southern Vascular of Panama City, LLC, can determine if you’re a good candidate for sclerotherapy. You may be a good candidate if:

Your veins are painful
Your legs feel sore or heavy
The skin on your legs is patchy or dry
There is a rash near your veins

You may also benefit from sclerotherapy if you have spider veins or varicose veins that negatively affect your confidence or self-esteem."
    }
  },{
    "@type": "Question",
    "name": "What happens during a sclerotherapy appointment?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A sclerotherapy appointment begins with a physical exam, a review of your medical history, and a discussion of your symptoms. If the team at Southern Vascular of Panama City, LLC determines that you can benefit from treatment, you lie on your back with your legs up.

Next, your provider cleans your legs with an antiseptic solution. They then insert a small needle into the vein. Your provider injects the sclerant into each vein. Afterward, they massage the veins, preventing blood from reentering them.

During your appointment, it’s normal to experience a burning or tingling sensation. The entire process usually takes less than an hour."
    }
  },{
    "@type": "Question",
    "name": "What is recovery after sclerotherapy like?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Following sclerotherapy, you return home. Make sure to follow your provider’s instructions carefully. Exercise regularly to prevent clotting and avoid direct sunlight for at least a week.

You may experience some mild bruising and swelling in the first few days after your appointment, but this should subside within a week. Depending on the severity of your varicose or spider veins, you might need one or several follow-up treatments.

To schedule a sclerotherapy appointment at Southern Vascular of Panama City, LLC, call the office or book online today."
    }
  }]
}
  
  `
})
}

//Ultrasound-Guided Vein Ablation
if(this.$route.params.uid.includes('ultrasound-guided-vein-ablation')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
     {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is ultrasound-guided vein ablation?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ultrasound-guided vein ablation is an outpatient procedure used to treat varicose veins and spider veins located deep beneath the skin. The treatment involves your Southern Vascular of Panama City, LLC provider using ultrasound imaging to guide and position a small electrode.

Once placed, the electrode heats up, causing your vein to collapse and close off. Afterward, your blood reroutes to healthier pathways, improving circulation."
    }
  },{
    "@type": "Question",
    "name": "Am I a candidate for ultrasound-guided vein ablation?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Only a qualified vein specialist like those at Southern Vascular of Panama City, LLC, can determine if you’re a good candidate for ultrasound-guided vein ablation. During your initial consultation, your provider conducts a physical exam, reviews your medical history, and asks about your symptoms and lifestyle.

If you experience any of the following symptoms due to varicose or spider veins, you’ll probably qualify:

Aching
Throbbing pain
Swelling
Skin irritation or sores
Skin discoloration

You might also benefit from ultrasound-guided vein ablation if you avoid wearing skirts or shorts due to the appearance of blue, green, or purple leg veins."
    }
  },{
    "@type": "Question",
    "name": "What equipment does ultrasound-guided vein ablation use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To perform ultrasound-guided vein ablation, the team at Southern Vascular of Panama City, LLC, uses an ultrasound machine, catheter, radiofrequency electrode, and console.

On the day of your appointment, you lie on your back and bend your knees. Next, your provider injects a local anesthetic into both legs and applies a water-based lubricant to your skin. Your provider then runs a small, handheld tool called a transducer across the surface of your skin.

The transducer emits high-frequency sound waves that bounce off the veins in your leg. The sound waves produce images that display a feed on the console. Your provider uses the console to find varicose veins and spider veins deep beneath your skin. Once they pinpoint the veins, your provider carefully inserts the electrode into a small incision.

The electrode heats up, causing the treated vein to swell and collapse. Your provider repeats this process several times, addressing as many veins as necessary."
    }
  },{
    "@type": "Question",
    "name": "Is ultrasound-guided vein ablation safe?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ultrasound-guided vein ablation is safe and usually well-tolerated. Following your appointment, it’s normal to experience some mild swelling and bruising. Southern Vascular of Panama City, LLC, provides you with a list of recovery instructions.

Closely adhere to these guidelines and avoid direct sunlight and overly strenuous activity for at least a week. You should also make an effort to attend all follow-up appointments.

To learn more about the benefits of ultrasound-guided vein ablation, schedule an appointment at Southern Vascular of Panama City, LLC. Call the office or book a consultation online today."
    }
  }]
}
  
  `
})
}

//Restless Leg Syndrome
if(this.$route.params.uid.includes('restless-leg-syndrome')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is restless leg syndrome?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Restless leg syndrome (RLS) causes an uncontrollable urge to move or reposition your legs when sitting or lying down. The condition affects people of all genders and races, but it’s especially common in patients who are middle-aged or older.

Restless leg syndrome isn’t necessarily serious, but it can negatively affect your quality of life. If you spend most nights tossing and turning due to irritating or uncomfortable leg sensations, make an appointment at Southern Vascular of Panama City, LLC, as soon as possible."
    }
  },{
    "@type": "Question",
    "name": "What are the symptoms of restless leg syndrome?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The most common symptom of restless leg syndrome is the urge to kick or reposition your legs. Other telltale signs of RLS include:

Tingling sensations that begin after rest
Relief that occurs with movement
Symptoms that worsen in the evenings
Nighttime leg twitching

RLS usually affects both legs. Some people with RLS also experience tingling or pulsing sensations in their arms and fingers. The sensations caused by RLS affect everyone differently, but they’re usually described as creeping, crawling, itching, or pulling."
    }
  },{
    "@type": "Question",
    "name": "When should I see a doctor about restless leg syndrome?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Many people wait to seek treatment for restless leg syndrome because they don’t realize it’s a medical issue. Unfortunately, without professional intervention, RLS can cause daytime drowsiness, an inability to focus, and insomnia.

If you fail to get a full eight hours of sleep two or three times a week or regularly find yourself kicking or moving in your sleep, RLS may be to blame."
    }
  },{
    "@type": "Question",
    "name": "How is restless leg syndrome diagnosed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To diagnose restless leg syndrome, the team at Southern Vascular of Panama City, LLC conducts a physical and neurological exam, reviews your medical history, and asks about your symptoms and lifestyle. They also order blood tests, as an iron deficiency may present similar symptoms.

If the team suspects you have sleep apnea, they might also recommend a sleep study. A sleep study is a screening procedure that monitors your respiratory rate, heart rate, and brain's electrical activity while you sleep."
    }
  },{
    "@type": "Question",
    "name": "How is restless leg syndrome treated?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Treatment of restless leg syndrome depends on the severity of your symptoms and their effect on your quality of life. Southern Vascular of Panama City, LLC usually recommends a combination of vein therapy, such as endovenous radiofrequency ablation, and prescription medications.

There are several types of medicine used to treat RLS, including medications that increase dopamine in the brain, drugs that affect the calcium channels throughout your body, and muscle relaxants. The type of medication that’s right for you depends on your health history and symptoms.

To explore your treatment options for restless leg syndrome, schedule an appointment at Southern Vascular of Panama City, LLC. Call the office nearest you, or book a consultation online today."
    }
  }]
}
  
  `
})
}

//Deep Vein Thrombus (DVT)
if(this.$route.params.uid.includes('deep-vein-thrombus-dvt')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is deep vein thrombosis (DVT)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Deep vein thrombosis (DVT) causes blood clots to form in the deep veins of your body, particularly the veins in your legs. Without treatment, a blood clot caused by DVT can break loose and travel through your bloodstream. This can result in a blockage to your lungs, called a pulmonary embolism.

DVT can occur due to an underlying medical condition or long periods of inaction. Anyone can experience DVT, but it’s especially common in people with clotting disorders and those over the age of 60."
    }
  },{
    "@type": "Question",
    "name": "What are some common signs of deep vein thrombosis (DVT)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The symptoms of DVT vary from person to person. Early on, you might not experience any symptoms at all. As DVT progresses, telltale signs include:

Leg pain
Leg cramping or soreness
Red or discolored skin
A feeling of warmth

Discoloration and cramping can occur anywhere in the leg, but these symptoms are especially common between the calves and ankles."
    }
  },{
    "@type": "Question",
    "name": "Who gets deep vein thrombosis (DVT)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Anyone can experience deep vein thrombosis, but several factors may increase your risk, including:

Inheriting a blood clotting disorder
Suffering an injury
Undergoing surgery
Being pregnant
Taking birth control pills
Being overweight or obese
Smoking
Inflammatory bowel disease

You’re also more likely to experience DVT if you work a job that requires long periods of sitting, such as a truck driver or pilot."
    }
  },{
    "@type": "Question",
    "name": "How is deep vein thrombosis (DVT) diagnosed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To diagnose deep vein thrombosis (DVT), the team at Southern Vascular of Panama City, LLC conducts a physical examination, reviews your medical history, and asks about your lifestyle and symptoms. During the exam, your provider observes your legs for areas of swelling, tenderness, or discoloration.

If your provider determines you’re at risk of a blood clot, they may order additional testing, like an ultrasound, blood tests, or venography. These measures help the team visualize your circulatory system, which plays an important role in guiding treatment."
    }
  },{
    "@type": "Question",
    "name": "How is deep vein thrombosis (DVT) treated?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The team at Southern Vascular of Panama City, LLC offers several types of treatment for deep vein thrombosis, including:

Vein angioplasty
Vein angioplasty is an outpatient treatment in which your provider uses a balloon-tipped catheter to open a blocked vessel and improve circulation. The treatment is minimally invasive and doesn’t require general anesthesia.

Vein stenting
Vein stenting is similar to angioplasty but uses a small mesh tube called a stent to hold a vein open. Stenting is an outpatient procedure used to safely improve blood flow.

Anticoagulant therapy
Anticoagulant therapy uses prescription medications to prevent clotting. There are several types of blood thinners used in anticoagulant therapy. The type you’ll most benefit from depends on your health history and the severity of your DVT.

To learn more about the various treatments for deep vein thrombosis (DVT), schedule an appointment at Southern Vascular of Panama City, LLC. Call the office or book a consultation online today."
    }
  }]
}
  
  `
})
}

//Venous Therapies
if(this.$route.params.uid.includes('venous-therapies')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are Venous diseases?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "In patients with venous disease, the internal walls of the leg veins are deteriorated and the small valves are defective and incompetent. When a valve is incompetent, either in the deep or superficial vein system, blood flows backwards towards the foot. This is called reflux. When valves are incompetent in the superficial veins only, the deep veins have to carry more blood towards the heart. To compensate, the veins expand and the valves may not close properly. When this happens, such as in the case of servere varicose veins, the deep vein system may also become incompetent. When blood is no longer pumped effictively from from the lower leg, the peripheral veins will not be emptied even when walking. They remain filled with blood and the pressure in vein will not decrease. This condition is known as chronic venous insufficiency (CVO which may result in edema, skin change and in some cases ulcerations.

Varicose veins are gnarled. Enlarged veins. Any vein may become varicose, but the veins most commonly affected are those in your legs and feet. That's because standing and walking upright increases the pressure in the veins of your lower body.

For many people, varicose veins and spider veins — a common, mild variation of varicose veins — are simply a cosmetic concern. For other people, varicose veins can cause aching pain and discomfort. Sometimes varicose veins lead to more-serious problems.

Varicose veins may also signal a higher risk of other circulatory problems. Treatment may involve self-care measures or procedures by your doctor to close or remove veins."
    }
  },{
    "@type": "Question",
    "name": "How do you treat venoous diseases?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Venous insufficiency is neither uncommon nor beign.treatment is aimed at ameliorating the symptoms and, whenever possible, at correcting the underlying abnormality.

No oral medication has yet been proven useful for the treatment of venous disease. Graduated compression is the cornerstone of the modern treatment of venous insufficiency. Surgical or endovenous therapy is commonly reserved for those with discomfort or ulcers refractory to medical management. The primary goal of such therapy is to improve the venous circulation by correcting venous inssuficiency by removing the major reflux pathways. Chronic venous insufficiency treatment may include the following:

Measures to improve blood flow in the leg veins
Methods to help increase blood flow in leg veins include elevating the legs to reduce pressure in the leg veins and compression stockings to apply pressure on the legs and help blood flow. Other methods include keeping the legs uncrossed when sitting and reagular exercise.

Medications
Diurectics (medications used to draw excess fluid from the body through the kidneys) should typically not be used unless there are other separate conditions such as heart failure or kidney disease that are also contributributing to the swelling. Medications that improve the flow of blood through the vessels may be used in combination with compression therapy to help heal leg ulcers. Aspririn can also be used to help ulcers heal.

Sclerotherapy
For patients whose condition is more advances, sclerotherapy may be prescribed. This involves injecting a chemical into the affected veins. The chemical causes scarring in the veins and the body absorbs the scarred veins.

Surgery
Surgery is recommended in fewer than 10% of people with chronic venous insufficiency. Surgical procedures that may be used to treat the condition include:

Ligation. This procedure involves tying off an affected vein so that blood no longer flows though it. If the vein and/or its values are heavily damaged, the vein will be removed ('vein stripping\").
Surgical repair. A vein and/or valves may be surgically repaired, either through an open incision or with the use of a long catheter (hollow tube).
Vein transplant. This involves transplanting a healthy vein from another body area and replacing the diseased vein with the healthy vein.
Subfascial endoscopic perforator surgery. A minimally-invasive procedure performed with an endoscope (a small, flexible tube with a light and a lens on the end). The perforator veins ( veins found in the calf area) are clipped.
To learn more about the various treatments for venous diseases, schedule an appointment at Southern Vascular of Panama City, LLC. Call the office or book a consultation online today."
    }
  }]
}
  
  `
})
}

//Abdominal Aortic Aneurysm Repair
if(this.$route.params.uid.includes('aortic-aneurysm-repair')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why is the Procedure Performed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Open surgery to repair an abdominal aortic aneurysm is sometimes done as an emergency procedure when there is bleeding inside your body from the aneurysm.

You may have an abdominal aortic aneurysm that is not causing any symptoms or problems. Your doctor may have found the problem after you had an ultrasound or CT scan done for another reason. There is a risk that this aneurysm may suddenly break open (rupture) if you do not have surgery to repair it. However, surgery to repair the aneurysm may also be risky, depending on your overall health.

You and your doctor must decide whether the risk of having this surgery is smaller than the risk of rupture. The doctor is more likely to recommend surgery if the aneurysm is:

Larger (about 2 inches or 5 cm)
Growing more quickly (a little less than 1/4 inch over the last 6 to 12 months)"
    }
  },{
    "@type": "Question",
    "name": "What gives you a higher risk if you have the surgery?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Heart disease
Kidney failure"
    }
  },{
    "@type": "Question",
    "name": "What are some of the risks for this surgery?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Bleeding around the graft that needs more surgery
Blockage of the stent
Kidney failure
Poor blood supply to your legs, your kidneys, or other organs
Surgery is not successful and you need open surgery
The stent slips"
    }
  }]
}
  
  `
})
}

//Hardening of the Arteries
if(this.$route.params.uid.includes('hardening-of-the-arteries')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What are the causes of hardening arteries?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Hardening of the arteries is a process that often occurs with aging. As you grow older, plaque buildup narrows your arteries and makes them stiffer. These changes make it harder for blood to flow through them.

Clots may form in these narrowed arteries and block blood flow. Pieces of plaque can also break off and move to smaller blood vessels, blocking them. Either way, the blockage starves tissues of blood and oxygen, which can result in damage or tissue death.This is a common cause of heart attack and stroke.

High blood cholesterol levels can cause hardening of the arteries at a younger age. For many people, high cholesterol levels are the result of an unhealthy lifestyle -- most commonly, eating a diet that is high in fat.

Other risk factors are heavy alcohol use, lack of exercise, and being overweight. Other risk factors for hardening of the arteries are:

Diabetes
Family history of hardening of the arteries
High blood pressure
Smoking"
    }
  },{
    "@type": "Question",
    "name": "What are the symptoms of hardening arteries?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Hardening of the arteries does not cause symptoms until blood flow to part of the body becomes slowed or blocked. If the arteries to the heart become narrow, blood flow to the heart can slow down or stop. This can cause chest pain (stable angina), shortness of breath, and other symptoms.

Narrowed or blocked arteries may also cause problems and symptoms in your intestines, kidneys, legs, and brain."
    }
  }]
}
  
  `
})
}

//Angioplasty & Stent Replacement
if(this.$route.params.uid.includes('angioplasty-and-stent-placement')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Angioplasty & Stent Placement?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Angioplasty uses a medical \"balloon\" to widen blocked arteries. The balloon presses against the inside wall of the artery to open the space and improve blood flow. Atherectomy “bores”open the artery. A metal stent is often placed across the artery wall to keep the artery from narrowing again."
    }
  },{
    "@type": "Question",
    "name": "What techniques can be used to treat a blockage in your legs?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Aorta -- the main artery that comes from your heart
Artery in your hip or pelvis
Artery in your thigh
Artery behind your knee
Artery in your lower leg

Your surgeon will then place a tiny needle into the blood vessel in your groin, wrist or foot vessel. A tiny flexible wire will be inserted through this needle.

Your surgeon will be able to see your artery with live x-ray pictures. Dye will be injected into your body to show blood flow through your arteries. The dye will make it easier to see the blocked area.
Your surgeon will carefully guide a thin tube called a catheter through your artery to the blocked area.
Next your surgeon will pass a guide wire through the catheter to the blockage.
The surgeon will push another catheter with a very small atherectomy device to “core” open the blood vessel and then use a balloon inside the vessel to expand and deliver drugs to the vessel wall to keep it open..
The balloon is then filled with fluid. This opens the blocked vessel and restores blood flow to your legs.

A stent may also be placed in the blocked area. The stent is inserted at the same time as the balloon catheter. It expands when the balloon is blown up. The stent is left in place to help keep the artery open. The balloon and all the wires are then removed."
    }
  },{
    "@type": "Question",
    "name": "Why is the Procedure Performed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Symptoms of a blocked peripheral artery are pain, achiness, or heaviness in your leg that starts or gets worse when you walk. You may not need this procedure if you can still do most of your everyday activities. Your doctor can try medicines and other treatments first."
    }
  },{
    "@type": "Question",
    "name": "What are the risks of angioplasty and stent placement?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Allergic reaction to the x-ray dye
Bleeding or clotting in the area where the catheter was inserted
Damage to a blood vessel
Damage to the artery in the groin, which may need urgent surgery
Kidney failure (higher risk in people who already have kidney problems)
Misplacement of the stent"
    }
  }]
}
  
  `
})
}

//Aortic Aneurysm Repair
if(this.$route.params.uid.includes('aortic-aneurysm-repair')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Aortic Aneurysm Repair?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You will lie on a padded table in an operating room, in the radiology department of the hospital, or in a catheterization lab. You may receive general anesthesia (you are asleep and pain-free) or epidural or spinal anesthesia.

Your doctor will use ultrasound to place needle into your groin artery . Then your doctor will insert a stent (a metal coil) and a man made (synthetic) graft through the opening into the artery.
The doctor uses x-rays to guide the stent graft up into your aorta, to where the aneurysm is located. The doctor will open the stent using a spring-like mechanism and attach it to the walls of the aorta. Your aneurysm will eventually shrink around it.
The doctor will then use x-rays again to make sure the stent is in the right place and your aneurysm is not bleeding inside your body."
    }
  },{
    "@type": "Question",
    "name": "Why is the Procedure Performed?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Endovascular aortic repair is done because your aneurysm is very large, growing quickly, or is leaking or bleeding.

You may have an abdominal aortic aneurysm that is not causing any symptoms or problems. Your doctor may have found out about this problem when you had an ultrasound or CT scan for another reason. There is a risk that this aneurysm may open up (rupture) if you do not have surgery to repair it. However, surgery to repair the aneurysm may also be risky. In such cases, endovascular repair is an option.

You and your doctor must decide whether the risk of having this surgery is smaller than the risk of rupture if you don't have surgery to repair the problem. The doctor is more likely to recommend that you have surgery if the aneurysm is:

Larger (about 2 inches or 5 cm)
Growing more quickly (a little less than 1/4 inch over the last 6 to 12 months)
Endovascular repair has a lower risk of complications compared to open surgery. Your doctor is more likely to suggest this type of repair if you have other, more serious medical problems or are elderly."
    }
  },{
    "@type": "Question",
    "name": "What are the risks for surgery?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Blood clots in the legs that may travel to the lungs
Breathing problems
Infection, including in the lungs, urinary tract, and belly
Heart attack or stroke
Reactions to medicines"
    }
  },{
    "@type": "Question",
    "name": "What are the risks for anesthesia?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Allergic reactions to medicines
Breathing problems"
    }
  },{
    "@type": "Question",
    "name": "What are the risks of carotid surgery?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Heart Attack
Stroke (this is rare)
Infection"
    }
  }]
}
  
  `
})
}

//Peripheral Arterial Disease
if(this.$route.params.uid.includes('peripheral-arterial-disease')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": {
    "@type": "Question",
    "name": "What is Peripheral Arterial Disease?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "An aneurysm is a bulge or \"ballooning\" in the wall of an artery. Arteries are blood vessels that carry oxygen-rich blood from the heart to other parts of the body. If an aneurysm grows large, it can burst and cause dangerous bleeding or even death.

Most aneurysms occur in the aorta, the main artery that runs from the heart through the chest and abdomen. Aneurysms also can happen in arteries in the brain, heart and other parts of the body. IF an aneurysm in the brain bursts, it causes a stroke.Aneurysms can develop and become large before causing any symptoms. Often doctors can stop aneurysms from bursting if they find and treat them early. They use imaging tests to find aneurysms. Often aneurysms are found by chance during tests done for other reasons. Medicines and surgery are the two main treatments for aneurysms.

Causes

It is not clear exactly what causes aneurysms. Some aneurysms are present at birth (congenital). Defects in some of the parts of the artery wall may be responsible.

Common locations for aneurysms include:

The major artery from the heart (the aorta)
The brain (cerebral aneurysm)
In the leg behind the knee (popliteal artery aneurysm)
Intestine (mesenteric artery aneurysm)
An artery in the spleen (splenic artery aneurysm)
High blood pressure, high cholesterol, and cigarette smoking may raise your risk of certain types of aneurysms. High blood pressure is thought to play a role in abdominal aortic aneurysms. Atherosclerotic disease (cholesterol buildup in arteries) may also lead to the formation of some aneurysms.

Pregnancy is often linked to the formation and rupture of splenic artery aneurysms.

Symptoms

The symptoms depend on the location of the aneurysm. If the aneurysm occurs near the body's surface, pain and swelling with a throbbing mass if often seen.

Aneurysms within the body or brain often cause no symptoms.If an aneurysm ruptures, pain, low blood pressure, a rapid heart rate, and lightheadedness may occur.

The risk of death after a rupture is high.

Peripheral Arterial Disease- Legs

Peripheral artery disease is a condition of the blood vessels that leads to narrowing and hardening of the arteries that supply the legs and feet.The narrowing of the blood vessels leads to decreased blood flow, which can injure nerves and other tissues.

Causes

Peripheral artery disease is caused by arteriosclerosis, or \"hardening of the arteries.\" This problem occurs when fatty material (plaque) builds up on the walls of your arteries. This causes the arteries to become narrower. The Walls of the arteries also become stiffer and cannot widen (dilate) to allow greater blood flow when needed.

As a result, when the muscles of your legs are working harder (such as during exercise or walking) they cannot get enough blood and oxygen. Eventually, there may not be enough blood and oxygen, even when the muscles are resting.Peripheral artery disease is a common disorder that usually affects men over age 50.

People are at higher risk if they have a history of:

Abnormal cholesterol
Diabetes
Heart disease (coronary artery disease)
High blood pressure (hypertension)
Kidney disease involving hemodialysis
Smoking
Stroke (cerebrovascular disease)
Symptoms

The classic symptoms are pain, achiness, fatigue, burning, or discomfort in the muscles of your feet, calves, orthighs. These symptoms usually appear during walking or exercise and go away after several minutes of rest.

At first, these symptoms may appear only when you walk uphill, walk faster, or walk for longer distances.
Slowly, these symptoms come on more quickly and with less exercise.
Your legs or feet may feel numb when you are at rest. The legs also may feel cool to the touch, and the skin may look pale.
When peripheral artery disease becomes severe, you may have:

Impotence
Pain and cramps at night
Pain or tingling in the feet or toes, which can be so severe that even the weight of clothes or bed sheets is painful
Pain that is worse when you raise the leg and improves when you dangle your legs over the side of the bed
Skin that looks dark and blue
Sores that do not heal
Prevention

You can help your circulatory system (heart and blood vessels). Heart disease risk factors that you have some control over include high blood pressure, cholesterol levels, diabetes, obesity, and smoking.

Eat a heart-healthy diet with reduced amounts of saturated fat and cholesterol, and control your weight. Follow your health care provider's recommendations for treating high blood pressure, high cholesterol, ordiabetes. Reduce or stop smoking.
Exercise may help prevent obesity, and it helps people with diabetes control their blood sugar.
Exercise may help you maintain your abilities as much as possible and it reduces stress.
Have regular check-ups for your heart: • Have your blood pressure checked every year. If you have diabetes, heart disease, kidney problems, or certain other conditions, your blood pressure may need to be monitored more closely. • If your cholesterol level is normal, have it rechecked every 5 years. If you have diabetes, heart disease, kidney problems, or certain other conditions, your cholesterol may need to be monitored more closely.
Moderate exercise is one of the best things you can do to keep your heart, and the rest of your body, healthy. Consult with your health care provider before beginning a new exercise program. Exercise moderately and within your capabilities, but do it regularly.
People who exercise usually have less body fat and smoke less than people who do not exercise. They also tend to have fewer blood pressure problems and less heart disease.
Treatment

Quit smoking -- this is the single most important change you can make to reduce your risk of heart disease and stroke.

Other lifestyle changes can also reduce your risk of hardening of the arteries:

Avoid fatty foods. Eat well-balanced meals that are low in fat and cholesterol. Include several daily servings of fruits and vegetables. Adding fish to your diet at least twice a week may be helpful. However, do not eat fried fish.
Limit how much alcohol you drink -- one drink a day for women, two a day for men.
Exercise for 30 minutes a day if you are not overweight, and for 60 - 90 minutes a day if you are overweight. Talk to your doctor before starting a new exercise plan, especially if you have been diagnosed with heart disease or you have ever had a heart attack.
Get your blood pressure checked every 1 - 2 years before age 50 and yearly after age 50. Have your blood pressure checked more often if you have high blood pressure, heart disease, or you have had a stroke. Talk to your doctor about how often you should have your blood pressure checked.

If your blood pressure is high, it is important for you to lower it and keep it under control.

Everyone should keep their blood pressure below 140/90 mmHg
If you have diabetes, kidney disease, or have had a stroke or heart attack, your blood pressure should probably be lower. Ask your doctor what your blood pressure should be.
Your doctor may want you to take medicine for high cholesterol levels if lifestyle changes do not work. This will depend on:

Your age
Whether you have heart disease or other blood flow problems
Whether you smoke or are overweight
Whether you have high blood pressure or diabetes
Your doctor may suggest taking aspirin or another medicine to help prevent blood clots from forming in your arteries. These medicines are called antiplatelet drugs. DO NOT take aspirin without first talking to your doctor."
    }
  }
}
  
  `
})
}


//Carotid Artery Disease
if(this.$route.params.uid.includes('carotid-artery-disease')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": {
    "@type": "Question",
    "name": "What is Carotid Artery Disease?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Causes

Carotid artery disease occurs when sticky, fatty substances called plaque build up in the inner lining of the arteries. See also: Atherosclerosis (hardening of the arteries)The plaque may slowly block or narrow the carotid artery or cause a clot (thrombus) to form more suddenly. Clots Can lead to stroke.

Risk factors for blockage or narrowing of the arteries include:

Alcohol abuse
Cocaine use
Diabetes
Family history of stroke
High blood pressure
High cholesterol
Increasing age
Smoking (people who smoke one pack a day double their risk of a stroke)
Two uncommon conditions called Marfan syndrome and fibromuscular dysplasia (abnormal growth or development of the cells in the walls of carotid arteries) may also cause narrowing of the carotid arteries.

Symptoms

You may not have any symptoms of carotid artery disease.You may have symptoms of a stroke or a transient ischemic attack (TIA). Some of these symptoms include:

Blurred vision
Confusion
Loss of memory
Loss of sensation
Problems with speech and language
Vision loss
Weakness in one part of your body
Exams and Tests

Your health care provider will perform a physical exam. The health care provider may hear an abnormal sound called a bruit when using a stethoscope to listen to the blood flow in your neck. A physical exam may also reveal clots in the blood vessels of the eye. If you have had a stroke or TIA, a nervous system (neurological) exam will reveal other problems.

Risks

The risks depend on the type of arteriogram performed. Talk to your doctor about the risks involved before you have the test.

Risks may include:

Allergic reaction to the dye used
Bleeding, infection, and pain at the injection site
Blood clots
Damage to blood vessels
Damage to the kidneys from the dye used (higher risk for people with diabetes)"
    }
  }
}
  
  `
})
}

//Carotid Artery Surgery
if(this.$route.params.uid.includes('carotid-artery-disease')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": {
    "@type": "Question",
    "name": "What is Carotid Artery Surgery?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Carotid Artery Surgery
During carotid endarterectomy:

You receive general anesthesia. You are asleep and pain-free. Some hospitals use local anesthesia instead. Only the part of your body being worked on is numbed with medicine so that you do not feel pain.You will be given a medicine to help you relax.
You lie on your back on an operating table with your head turned to one side. The side your blocked carotid artery is on faces up.
The surgeon makes a cut (incision) on your neck over your carotid artery. A flexible tube (catheter) is put in place. Blood flows through the catheter around the blocked area during surgery.
Your carotid artery is opened. The surgeon removes the plaque inside the artery.• After the plaque is removed, the artery is closed with stitches. Blood now flows through the artery to your brain.
Your heart and brain activity will be monitored closely during surgery.
The surgery takes about 2 hours. After the procedure, your doctor may do a test to confirm that the artery has been opened.

Why the Procedure is Performed

This procedure is done if your doctor has found narrowing or a blockage in your carotid artery. Your doctor will have done one or more tests to see how much the carotid artery is blocked.

Surgery to remove the buildup in your carotid artery may be done if the artery is:

Narrowed by more than 70%
Narrowed between 50% and 70% and your doctor thinks you have a very high risk of having a stroke If you have had a stroke, your doctor will consider whether treating your blocked artery with surgery is safe for you.
Other treatment options your doctor will discuss with you are:

No treatment, other than tests to check your carotid artery every year
Medicine and diet to lower your cholesterol
Blood-thinning medicines to lower your risk of stroke. Some of these medicines are aspirin, clopidogrel(Plavix), and warfarin (Coumadin).
Carotid angioplasty and stenting is more likely to be used when carotid endarterectomy would not be safe. Go to the emergency room or call the local emergency number (such as 911) as soon as symptoms occur. When Having a stroke, every second of delay can result in more brain injury.

The following can help prevent a stroke:

Adults should have their cholesterol checked every 2-3 years and treated, if needed. If you have been treated for high cholesterol, you will need to have it checked more often.
Avoid fatty foods. Follow a healthy, low-fat diet.
Do not drink more than 1 - 2 alcoholic drinks a day.
Exercise regularly: 30 minutes a day if you are not overweight; 60 - 90 minutes a day if you are overweight.
Get your blood pressure checked every 1 - 2 years, especially if high blood pressure runs in your family. If You have high blood pressure, heart disease, diabetes, or you have had a stroke, you need to have it checked more often. Ask your doctor.
Quit smoking.
The following tests may be done:

Blood cholesterol and triglycerides test
Blood sugar (glucose) testo Ultrasound of the carotid arteries (carotid duplex Doppler study) to see how well blood is flowing through the carotid artery
Carotid or cerebral angiography
Computerized tomographic angiography (CTA)o Magnetic resonance angiography (MRA)
Treatment options include:

Blood-thinning medicines such as aspirin, clopidogrel (Plavix), and warfarin (Coumadin) to lower your risk of stroke
Medicine and diet to lower your cholesterol
Medicine and diet to control your blood pressure No treatment, other than checking your carotid artery with tests every year"
    }
  }
}
  
  `
})
}

//Peripheral Artery Bypass
if(this.$route.params.uid.includes('peripheral-artery-bypass')){
scripts.push({
  hid: '',
  type: 'application/scripts.push',
  innerHTML: `
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": {
    "@type": "Question",
    "name": "What is a Peripheral Artery Bypass?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Peripheral artery bypass surgery can be done in one or more of the following:

Aorta -- the main artery that comes from your heart
Artery in your hip
Artery in your thigh
Artery behind your knee
Artery in your lower leg
Artery in your armpit
During bypass surgery of any artery:

You will receive medicine (anesthesia) so that you do not feel pain. The kind of anesthesia you receive will depend on what artery is being treated.
Your surgeon will make a cut over the part of the artery that is blocked.
After moving skin and tissue out of the way, the surgeon will place clamps at each end of the blocked section of artery. The graft is then sewn in place.
The surgeon will make sure you have good blood flow in your lower leg. Then your cut will be closed.
If you are having bypass surgery to treat your aorta and iliac artery or your aorta and both femoral arteries (aortobifemoral)

You will probably have general anesthesia. This will make you unconscious and unable to feel pain. Or,you may have epidural or spinal anesthesia instead. The doctor will inject your spine with medicine to make you numb from your waist down.
Your surgeon will make a surgical cut in the middle of the abdomen to reach the aorta and iliac arteries.
If you are having bypass surgery to treat your lower leg (femoral popliteal):

You may have general anesthesia. You will be unconscious and unable to feel pain. You may instead have an epidural or spinal anesthesia. The doctor will inject your spine with medicine to make you numb fromyour waist down. Some people have local anesthesia and a medicine to relax them. Local anesthesia numbs just the area being worked on.
Your surgeon will make a cut in your leg between your groin and knee. It will be near the blockage in your artery.
Why the Procedure is Performed

Symptoms of a blocked peripheral artery are pain, achiness, or heaviness in your leg that starts or gets worse when you walk."
    }
  }
}
  
  `
})
}


// if(this.$route.params.uid.includes('frff')){
// scripts.push({
//   hid: '',
//   type: 'application/scripts.push',
//   innerHTML: `
//       // put everyting
  
//   `
// })
// }

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
