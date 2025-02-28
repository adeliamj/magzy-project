// // icon-slider.js
// class IconSlider extends HTMLElement {
//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         // diset jumlah total images agar diawal rect active tidak kosong
//         this.totalImages = 2;
//         this.currentIndex = 0;
//         this.render();
//         this.updateIndex(this.currentIndex, this.totalImages);
//     }

//     render() {
//         this.innerHTML = `
//             <svg class="try" width="428" height="3" viewBox="0 0 428 3" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="428" height="3" fill="#8B8B8B"/>
//                 <rect width="0%" height="3" fill="#E36B45" class="active"/>
//             </svg>
//         `;
//     }

//     // memperbarui lebar progres slider berdasarkan indeks yang aktif
//     updateIndex(newIndex, totalImages) {
//         const width = ((newIndex + 1) / totalImages) * 100;
//         this.querySelector('rect.active').setAttribute('width', `${width}%`);
//     }
// }

// customElements.define("icon-slider", IconSlider);

class IconSlider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.totalImages = 2;  // Jumlah total gambar untuk slider
        this.currentIndex = 0;
        this.render();
        this.updateIndex(this.currentIndex, this.totalImages);
    }

    render() {
        this.innerHTML = `
            <svg width="100%" height="100%" viewBox="0 0 100% 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#8B8B8B"/>
                <rect width="0%" height="100%" fill="#E36B45" class="active"/>
            </svg>
        `;
    }

    // Memperbarui lebar slider sesuai dengan indeks aktif
    updateIndex(newIndex, totalImages) {
        const width = ((newIndex + 1) / totalImages) * 100;
        this.querySelector('rect.active').setAttribute('width', `${width}%`);
    }
}

customElements.define("icon-slider", IconSlider);

