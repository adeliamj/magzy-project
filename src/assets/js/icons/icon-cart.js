class IconCart extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.outerHTML = `
      <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1730_10987)">
<path d="M16.875 19.1077H17.875V17.1077H16.875V19.1077ZM7.79719 18.1077L7.79704 19.1077H7.79719V18.1077ZM6.32156 16.8758L7.30547 16.6971L7.30459 16.6924L6.32156 16.8758ZM3.75235 3.10771L4.73538 2.92427L4.583 2.10771L3.75235 2.10771L3.75235 3.10771ZM1.50001 2.1077L0.500005 2.10769L0.499995 4.10769L1.49999 4.1077L1.50001 2.1077ZM16.875 17.1077H7.79719V19.1077H16.875V17.1077ZM7.79733 17.1077C7.68024 17.1077 7.56687 17.0666 7.47698 16.9915L6.19526 18.5268C6.6447 18.902 7.21157 19.1076 7.79704 19.1077L7.79733 17.1077ZM7.47698 16.9915C7.38709 16.9165 7.32639 16.8123 7.30546 16.6971L5.33767 17.0546C5.44232 17.6306 5.74582 18.1516 6.19526 18.5268L7.47698 16.9915ZM7.30459 16.6924L4.73538 2.92427L2.76932 3.29115L5.33853 17.0593L7.30459 16.6924ZM3.75235 2.10771L1.50001 2.1077L1.49999 4.1077L3.75234 4.10771L3.75235 2.10771Z" fill="currentColor"/>
<path d="M7.875 21.8077C8.91053 21.8077 9.75 20.9682 9.75 19.9327C9.75 18.8972 8.91053 18.0577 7.875 18.0577C6.83947 18.0577 6 18.8972 6 19.9327C6 20.9682 6.83947 21.8077 7.875 21.8077Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.875 21.8577C18.9105 21.8577 19.75 21.0182 19.75 19.9827C19.75 18.9472 18.9105 18.1077 17.875 18.1077C16.8395 18.1077 16 18.9472 16 19.9827C16 21.0182 16.8395 21.8577 17.875 21.8577Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.86406 13.3577C5.31178 13.3577 4.86406 13.8054 4.86406 14.3577C4.86406 14.91 5.31178 15.3577 5.86406 15.3577V13.3577ZM17.6344 14.3577V15.3577H17.6345L17.6344 14.3577ZM19.11 13.1258L18.1261 12.9469L18.1261 12.9471L19.11 13.1258ZM20.25 6.8577L21.2339 7.03663L21.4483 5.8577H20.25V6.8577ZM4.5 5.8577C3.94772 5.8577 3.5 6.30541 3.5 6.8577C3.5 7.40998 3.94772 7.8577 4.5 7.8577V5.8577ZM5.86406 15.3577H17.6344V13.3577H5.86406V15.3577ZM17.6345 15.3577C18.22 15.3576 18.7869 15.152 19.2363 14.7768L17.9546 13.2415C17.8647 13.3166 17.7513 13.3577 17.6342 13.3577L17.6345 15.3577ZM19.2363 14.7768C19.6857 14.4016 19.9892 13.8806 20.0939 13.3046L18.1261 12.9471C18.1052 13.0623 18.0445 13.1665 17.9546 13.2415L19.2363 14.7768ZM20.0939 13.3048L21.2339 7.03663L19.2661 6.67876L18.1261 12.9469L20.0939 13.3048ZM20.25 5.8577H4.5V7.8577H20.25V5.8577Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1730_10987">
<rect width="24" height="24" fill="currentColor" transform="translate(0 0.857697)"/>
</clipPath>
</defs>
</svg>

  
        `;
    }
}
customElements.define("icon-cart", IconCart);