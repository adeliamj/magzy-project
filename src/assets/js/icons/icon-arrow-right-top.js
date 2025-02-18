

class IconArrowRightTop extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.outerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 5.3577V6.8577H16.9425L4.5 19.3002L5.5575 20.3577L18 7.9152V17.3577H19.5V5.3577L7.5 5.3577Z" fill="currentColor"/>
</svg>
  
        `;
    }
}
customElements.define("icon-arrow-right-top", IconArrowRightTop);
