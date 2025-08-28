// settings.js
// Everything customizable lives here.
// You can deploy different variants per page by shipping a different settings.js.

window.GALLERY_SETTINGS = {
  CONFIG: {
    styles: {
      borderRadius: 12,         // px
      gap: 8,                   // px
      mainAspectRatio: "16/9",

      preview: {
        sizeDesktop: 65,        // px
        sizeMobile: 55,         // px
        borderWidth: 4,         // px
        activeBorder: "#0073e6",
        inactiveBorder: "transparent"
      },

      playButton: {
        sizeDesktop: 96,        // px (outer hit area)
        sizeMobile: 78,         // px
        circleDesktop: 66,      // px (inner circle)
        circleMobile: 56,       // px
        iconSize: "1.4rem"
      },

      lightboxPadding: "1rem"
    },

    behavior: {
      idleTimeoutMs: 10000,     // 10s
      previewLoopSeconds: 5,    // 5s loop for minis & idle loops
      vimeoMiniQuality: "240p", // vimeo mini-loop quality
      validationTimeouts: {
        image: 1100,
        thumb: 900,
        poster: 900,
        video: 1300,
        vimeoOembed: 1500
      }
    }
  },

  // Media catalog (images, videos, Vimeo). Invalid paths will be filtered out fast.
  GALLERY_DATA: [
    { type: "image", src: "media/image1.jpg", alt: "Sunlight over ridge" },
    { type: "image", src: "media/image2.jpg", alt: "Forest path" },
    { type: "image", src: "media/image3.jpg", alt: "City skyline" },

    { type: "video", src: "media/video2.mp4", poster: "media/image1.jpg", alt: "Local surfing clip" },

    // Vimeo example (your new url)
    { type: "vimeo", src: "https://vimeo.com/1112464020", poster: "media/my-local-vimeo-thumb.jpg", alt: "Vimeo: city timelapse" },

    { type: "image", src: "media/image4.jpg", alt: "Lake reflection" },
    { type: "image", src: "media/image5.jpg", alt: "Autumn leaves" },
    { type: "image", src: "media/image6.jpg", alt: "Bridge at dusk" },
    { type: "image", src: "media/image7.jpg", alt: "Mountain trail" }
  ]
};
