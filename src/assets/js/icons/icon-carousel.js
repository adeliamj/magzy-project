class IconCarousel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.outerHTML = `
      <svg class="icarousel" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="currentColor"/>
<path d="M17.1714 16.0007L12.2217 11.0509L13.6359 9.63672L19.9999 16.0007L13.6359 22.3646L12.2217 20.9504L17.1714 16.0007Z" fill="currentColor"/>
</svg>

        `;
    }
}
customElements.define("icon-carousel", IconCarousel);


