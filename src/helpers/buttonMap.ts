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
      targetSelector: ".elementor-element-b2838c1",
    },
  ],
};
