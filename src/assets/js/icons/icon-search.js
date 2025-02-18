class IconSearch extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.outerHTML = `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.031 17.4745L22.3137 21.7572L20.8995 23.1714L16.6168 18.8887C15.0769 20.1207 13.124 20.8577 11 20.8577C6.032 20.8577 2 16.8257 2 11.8577C2 6.8897 6.032 2.8577 11 2.8577C15.968 2.8577 20 6.8897 20 11.8577C20 13.9817 19.263 15.9346 18.031 17.4745ZM16.0247 16.7325C17.2475 15.4723 18 13.7533 18 11.8577C18 7.9902 14.8675 4.8577 11 4.8577C7.1325 4.8577 4 7.9902 4 11.8577C4 15.7252 7.1325 18.8577 11 18.8577C12.8956 18.8577 14.6146 18.1052 15.8748 16.8824L16.0247 16.7325Z" fill="currentColor"/>
        </svg>
        `;
    }
}
customElements.define("icon-search", IconSearch);