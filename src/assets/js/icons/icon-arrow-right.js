class IconArrowRight extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.outerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.1714 12.8584L8.22168 7.90863L9.63589 6.49442L15.9999 12.8584L9.63589 19.2223L8.22168 17.8081L13.1714 12.8584Z" fill="currentColor"/>
  </svg>

      `;
  }
}
customElements.define("icon-arrow-right", IconArrowRight);