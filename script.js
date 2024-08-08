const imageWrapper = document.querySelector(".images");
const searchInput = document.querySelector(".search-box input");
const loadMoreBtn = document.querySelector(".load-more");

const images = [
    { src: './images/img-1.jpg', photographer: 'Photographer 1' },
    { src: './images/img-2.jpg', photographer: 'Photographer 2' },
    { src: './images/img-3.jpg', photographer: 'Photographer 3' },
    { src: './images/img-4.jpg', photographer: 'Photographer 4' },
    { src: './images/img-5.jpg', photographer: 'Photographer 1' },
    { src: './images/img-6.jpg', photographer: 'Photographer 2' },
    { src: './images/img-7.jpg', photographer: 'Photographer 3' },
    { src: './images/img-8.jpg', photographer: 'Photographer 4' },
    { src: './images/img-9.jpg', photographer: 'Photographer 1' },
    { src: './images/img-10.jpg', photographer: 'Photographer 2' },
    { src: './images/img-2.jpg', photographer: 'Photographer 3' },
    { src: './images/img-4.jpg', photographer: 'Photographer 4' },
    { src: './images/img-4.jpg', photographer: 'Photographer 4' },
    { src: './images/img-5.jpg', photographer: 'Photographer 1' },
    { src: './images/img-6.jpg', photographer: 'Photographer 2' },

    // Add more image objects as needed
];

const generateHTML = (images) => {
    imageWrapper.innerHTML = images.map(img =>
        `<li class="card">
            <img onclick="showLightbox('${img.photographer}', '${img.src}')" src="${img.src}" alt="img">
            <div class="details">
                <div class="photographer">
                    <i class="uil uil-camera"></i>
                    <span>${img.photographer}</span>
                </div>
                <button onclick="downloadImg('${img.src}');">
                    <i class="uil uil-import"></i>
                </button>
            </div>
        </li>`
    ).join("");
}

const showLightbox = (photographer, imgSrc) => {
    const lightbox = document.querySelector(".lightbox");
    const photographerName = lightbox.querySelector(".photographer span");
    const previewImg = lightbox.querySelector(".preview-img img");
    photographerName.textContent = photographer;
    previewImg.src = imgSrc;
    lightbox.classList.add("show");
}

const closeLightbox = () => {
    const lightbox = document.querySelector(".lightbox");
    lightbox.classList.remove("show");
}

const downloadImg = (imgSrc) => {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = 'image.jpg';
    link.click();
}

// Initial load of images
generateHTML(images);

document.querySelector(".lightbox .close-icon").addEventListener("click", closeLightbox);

// Optional: Add search functionality if needed
searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const query = e.target.value.toLowerCase();
        const filteredImages = images.filter(img => 
            img.photographer.toLowerCase().includes(query)
        );
        generateHTML(filteredImages);
    }
});

// Optional: Implement load more functionality if desired
loadMoreBtn.addEventListener("click", () => {
    // For local images, you might not need to load more dynamically
    // Add more images to the `images` array if needed
});
