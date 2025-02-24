class IconHamburger extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.outerHTML = `
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_135_683)">
<path d="M3.75 12.512H20.25" stroke="#1E1C0B" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M3.75 6.51199H20.25" stroke="#1E1C0B" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M3.75 18.512H20.25" stroke="#1E1C0B" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_135_683">
<rect width="24" height="24" fill="white" transform="translate(0 0.511993)"/>
</clipPath>
</defs>
</svg>
        `;
    }
}
customElements.define("icon-hamburger", IconHamburger);


