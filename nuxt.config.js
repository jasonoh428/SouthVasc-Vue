export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "SouthernVascular",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-215187232-1",
        async: true,
      },
      {
        hid: "gtag",
        type: "text/javascript",
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "UA-215187232-1");
        `,
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=AW-10847405916",
        async: true,
      },
      {
        hid: "gtag2",
        type: "text/javascript",
        innerHTML: `
        function gtag2() {
          dataLayer.push(arguments);
        }
        gtag2("js", new Date());
      
        gtag2("config", "AW-10847405916");
        `,
      },
      {
        vmid: "twitter",

        defer: true,
        type: "text/javascript",
        /* innerHTML:`window.twttr = (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function(f) {
            t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));`*/
        src: "//platform.twitter.com/widgets.js",
      },
    ],

    __dangerouslyDisableSanitizersByTagID: {
      twitter: ["innerHTML"],
      gtag: ["innerHTML"],
      gtag2: ["innerHTML"],
      'ld-schema': ["innerHTML"]
    },
  },
  router: {
    routes: [
      {
        path: '/request-appointment',
        component: '~/pages/request-appointment.vue'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/sanity/imageUrl.js", "~/plugins/vue/youtube.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/sanity/module", "@nuxtjs/color-mode"],

  sanity: {
    projectId: "br1xwv5s",
    dataset: "production",
    apiVersion: "v2021-03-25",
    useCdn: true,
    token: process.env.SANITY_TOKEN,
  },

  styleResources: {
    scss: ["~/assets/vars.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "nuxt-webfontloader"],

  webfontloader: {
    google: {
      families: ["Raleway:400,700,800", "Open-sans:400"], //Loads Lato font with weights 400 and 700
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
