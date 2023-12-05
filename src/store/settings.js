const appConfigDEV = {
  isDevMode: true,
  language: "th",
  timeZone: "Europe/Paris",
  languageAvailable: ["th"],
  apiPath: "http://localhost:8000/api/backoffice/v1/",
  uploadPath: "http://localhost:8000/",
  webPath: "http://localhost:8000/",
  pages: {
    dashboard: true,
    messages: false,
    inbox: false,
    subscribe: false,
    productcate: true,
    products: true,
    members: true,
    slides: true,
    menu: false,
    category: true,
    posts: true,
    reports: true,
    webinfo: true,
    languages: true,
    admins: true,
    configs: false,
    profile: false,
    banksettings: false,
    orders: true,
    employee: true,
    groups: {
      notify: true,
      article: true,
      product: true,
      report: false,
      system: true,
    },
  },
  features: {
    multilingual: true,
    flexibleCategory: true,
    multipleImage: true,
    seo: true,
    price: false,
    tag: true,
    iframe: true,
    redirect: true,
    social: false,
    notify: false,
  },
};
const appConfigPROD = {
  isDevMode: false,
  language: "th",
  timeZone: "Asia/Bangkok",
  languageAvailable: ["th"],
  apiPath: "https://juppgas-delivery.shop/api/backoffice/v1/",
  uploadPath: "https://juppgas-delivery.shop/",
  webPath: "https://juppgas-delivery.shop/",
  pages: {
    dashboard: true,
    messages: false,
    inbox: false,
    subscribe: false,
    productcate: true,
    products: true,
    members: true,
    slides: true,
    menu: false,
    category: true,
    posts: true,
    reports: true,
    webinfo: true,
    languages: true,
    admins: true,
    configs: false,
    profile: false,
    banksettings: false,
    orders: true,
    employee: true,
    groups: {
      notify: true,
      article: true,
      product: true,
      report: false,
      system: true,
    },
  },
  features: {
    multilingual: true,
    flexibleCategory: true,
    multipleImage: true,
    seo: true,
    price: false,
    tag: true,
    iframe: true,
    redirect: true,
    social: false,
    notify: false,
  },
};

export default appConfigDEV;
//export default appConfigPROD;
