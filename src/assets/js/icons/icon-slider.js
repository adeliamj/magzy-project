class IconSlider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.outerHTML = `
     <svg width="428" height="3" viewBox="0 0 428 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="428" height="3" fill="#8B8B8B"/>
        <rect width="100" height="3" fill="#E36B45"/>
    </svg>

  
        `;
    }
}
customElements.define("icon-slider", IconSlider);