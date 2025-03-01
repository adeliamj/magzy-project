class IconArrowDown extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.outerHTML = `
      <svg width="14" height="8" viewBox="0 0 14 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M6.9997 5.0291L11.9495 0.0793762L13.3637 1.49359L6.9997 7.8576L0.635742 1.49359L2.04996 0.0793762L6.9997 5.0291Z" fill="currentColor"/>
</svg>
  
        `;
    }
}
customElements.define("icon-arrow-down", IconArrowDown);