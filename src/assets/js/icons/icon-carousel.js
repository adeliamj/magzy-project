class IconCarousel extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.outerHTML = `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="currentColor"/>
<path d="M14.8284 16.0007L19.7782 20.9504L18.364 22.3646L12 16.0007L18.364 9.63672L19.7782 11.0509L14.8284 16.0007Z" fill="currentColor"/>
</svg>
 
  
        `;
    }
}
customElements.define("icon-carousel", IconCarousel);


