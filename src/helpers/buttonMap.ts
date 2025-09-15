import { getConfig } from "../config/env.js";

const config = getConfig();

export const buttonMap = {
  "/": [
    {
      desc: 'HomePage "Dog collar" hero button',
      selector: '[data-id="38670d6"]',
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "Cat collar" hero button',
      selector: '[data-id="ce01fe8"]',
      expectedUrl: "https://cats.contentv3.petpace.com/product/collar-v3/",
      opensInNewTab: true,
    },
    {
      desc: 'HomePage "From home to clinic" section, ask a vet "learn more" button',
      selector: '[data-id="0850032"] a',
      expectedUrl: "/ask-a-vet/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "From home to clinic" section, ask a vet "buy" button',
      selector: ".elementor-element-88a0518",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "From home to clinic" section, Share data with your vet "learn more" button',
      selector: ".elementor-element-a1322f1",
      expectedUrl: "/use-cases/share-with-your-vet/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "From home to clinic" section, Share data with your vet "buy" button',
      selector: ".elementor-element-8839f87",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "From home to clinic" section, Enabling remote access for veterinarians "learn more" button',
      selector: ".elementor-element-4a7972c",
      expectedUrl: "/use-cases/share-with-your-vet/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "From home to clinic" section, Enabling remote access for veterinarians "buy" button',
      selector: ".elementor-element-e1c84bb",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Pregnancy section',
      selector: '[data-index="0"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/pregnancy/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Share with your vet section',
      selector: '[data-index="2"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/share-with-your-vet/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Anxiety and Stress section',
      selector: '[data-index="3"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/anxiety-stress/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Senior Dogs section',
      selector: '[data-index="4"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/senior-dogs/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Epilepsy section',
      selector: '[data-index="5"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/epilepsy-monitoring/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Pain detection section',
      selector: '[data-index="6"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/pain-detection/",
      opensInNewTab: false,
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Proactiove Health section',
      selector: '[data-index="7"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/proactive-health/",
      opensInNewTab: false,
    },
    {
      desc: "HomePage Apple watch section, learn more button",
      selector: ".elementor-element-a916310",
      expectedUrl: "/apple-watch/",
      opensInNewTab: false,
    },
    {
      desc: "HomePage Apple watch section, buy button",
      selector: ".elementor-element-cb5c9f9",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
    {
      desc: "HomePage new V3 for cats section, learn more button",
      selector: ".elementor-element-4f6d2e3",
      expectedUrl: "https://cats.contentv3.petpace.com/",
      opensInNewTab: false,
    },
    {
      desc: "HomePage new V3 for cats section, buy button",
      selector: ".elementor-element-02f49e4",
      expectedUrl: "https://cats.contentv3.petpace.com/product/collar-v3/",
      opensInNewTab: false,
    },
    {
      desc: "HomePage GPS Tracking section, buy now button",
      selector: ".elementor-element-f9e12b2 a",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
  ],
  "/how-it-works/": [
    {
      desc: "How it works, Ready to take control section, Get started today button",
      selector: ".elementor-element-5a8878c",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
    {
      desc: "How it works, Ready to bring control section, Get petpace now button",
      selector: ".elementor-element-3ae83c4 a",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
  ],

  "/apple-watch": [
    {
      desc: "Apple watch, Wellbeing section, buy now button",
      selector: ".elementor-element-0bb3352 a",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
    {
      desc: "Apple watch, Always connected section, learn more button",
      selector: '[data-id="9ad1571"]',
      expectedUrl: "/how-it-works/",
      opensInNewTab: false,
    },
  ],
  "/ask-a-vet/": [
    {
      desc: "Ask a vet, Have a question section, get petpace now button",
      selector: ".elementor-element-f738681",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
  ],
  "/use-cases/share-with-your-vet/": [
    {
      desc: "Share with your vet, Share With Your Vet section, learn more button",
      selector: ".elementor-element-a400046 a",
      expectedUrl: "",
      opensInNewTab: false,
    },
    {
      desc: "Share with your vet, Join the petpace remote section, Create a PetPace ID button",
      selector: ".elementor-element-454e405 a",
      expectedUrl: "https://webapp-dev.pp-srv.com/auth/sign-up?ut=veterinary_monitoring",
      opensInNewTab: true,
    },
    {
      desc: "Share with your vet, Track, Share section, Shop the collar button",
      selector: ".elementor-element-45b61c9 a",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
  ],
  "/specs/": [
    {
      desc: "Product specifications, hero section, buy now button",
      selector: ".elementor-element-d304833",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
  ],
  "/journey/": [
    {
      desc: "Journey, Daily messages section, support button",
      selector: ".elementor-element-51aa87a",
      expectedUrl: "/contact/",
      opensInNewTab: false,
    },
    {
      desc: "Journey, Good data section, buy now button",
      selector: ".elementor-element-b82b960",
      expectedUrl: "/product/collar-v3/",
      opensInNewTab: false,
    },
  ],
};
