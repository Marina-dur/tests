import { getConfig } from "../config/env.js";

const config = getConfig();

export const buttonMap = {
  "/": [
    {
      desc: 'HomePage "Dog collar" hero button',
      selector: '[data-id="38670d6"]',
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
    {
      desc: 'HomePage "From home to clinic" section, ask a vet "learn more" button',
      selector: '[data-id="0850032"] a',
      expectedUrl: "/ask-a-vet/",
      targetSelector: ".elementor-element-b2838c1",
    },
    {
      desc: 'HomePage "From home to clinic" section, ask a vet "buy" button',
      selector: ".elementor-element-88a0518",
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
    {
      desc: 'HomePage "From home to clinic" section, Share data with your vet "learn more" button',
      selector: ".elementor-element-a1322f1",
      expectedUrl: "/share-with-your-vet/",
      targetSelector: ".elementor-element-ee2fc9a",
    },
    {
      desc: 'HomePage "From home to clinic" section, Share data with your vet "buy" button',
      selector: ".elementor-element-8839f87",
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
    {
      desc: 'HomePage "From home to clinic" section, Enabling remote access for veterinarians "learn more" button',
      selector: ".elementor-element-4a7972c",
      expectedUrl: "/share-with-your-vet/",
      targetSelector: ".elementor-element-ee2fc9a",
    },
    {
      desc: 'HomePage "From home to clinic" section, Enabling remote access for veterinarians "buy" button',
      selector: ".elementor-element-e1c84bb",
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Pregnancy section',
      selector: '[data-index="0"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/pregnancy/",
      targetSelector: ".elementor-element-2531834",
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Share with your vet section',
      selector: '[data-index="2"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/share-with-your-vet/",
      targetSelector: ".elementor-element-ee2fc9a",
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Anxiety and Stress section',
      selector: '[data-index="3"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/anxiety-stress/",
      targetSelector: ".elementor-element-ee2fc9a",
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Senior Dogs section',
      selector: '[data-index="4"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/senior-dogs/",
      targetSelector: ".elementor-element-ee2fc9a",
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Epilepsy section',
      selector: '[data-index="5"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/epilepsy-monitoring/",
      targetSelector: ".elementor-element-ee2fc9a",
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Pain detection section',
      selector: '[data-index="6"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/pain-detection/",
      targetSelector: ".elementor-element-ee2fc9a",
    },
    {
      desc: 'HomePage "PetPace Has You Covered" section, Proactiove Health section',
      selector: '[data-index="7"] .elementor-element-d86a74a',
      expectedUrl: "/use-cases/proactive-health/",
      targetSelector: ".elementor-element-ee2fc9a",
    },
    {
      desc: "HomePage Apple watch section, learn more button",
      selector: ".elementor-element-a916310",
      expectedUrl: "/apple-watch/",
      targetSelector: ".elementor-element-809c615",
    },
    {
      desc: "HomePage Apple watch section, buy button",
      selector: ".elementor-element-cb5c9f9",
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
    {
      desc: "HomePage GPS Tracking section, buy now button",
      selector: ".elementor-element-f9e12b2 a",
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
  ],
  "/how-it-works/": [
    {
      desc: "How it works, Ready to take control section, Get started today button",
      selector: ".elementor-element-5a8878c",
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
    {
      desc: "How it works, Ready to bring control section, Get petpace now button",
      selector: ".elementor-element-3ae83c4 a",
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
  ],

  "/apple-watch": [
    {
      desc: "Apple watch, Wellbeing section, buy now button",
      selector: ".elementor-element-0bb3352 a",
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
    {
      desc: "Apple watch, Always connected section, learn more button",
      selector: '[data-id="9ad1571"]',
      expectedUrl: "/how-it-works/",
      targetSelector: ".elementor-element-29072dd",
    },
  ],
  "/ask-a-vet/": [
    {
      desc: "Ask a vet, Have a question section, get petpace now button",
      selector: ".elementor-element-f738681",
      expectedUrl: "/product/collar-v3/",
      targetSelector: '[data-id="d128612"]',
    },
  ],
  "/use-cases/share-with-your-vet/": [
    {
      desc: "Share with your vet, Share With Your Vet section, learn more button",
      selector: ".elementor-element-a400046 a",
      expectedUrl: "",
      targetSelector: "",
    },
  ],
};
