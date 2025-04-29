document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('#testimonial-carousel')) {
    new Splide('#testimonial-carousel', {
      type: 'loop', // Infinite loop
      perPage: 2, // Show 2 testimonials at a time
      perMove: 1, // Scroll one at a time
      gap: '20px', // Space between slides
      autoplay: false, // Auto-slide
      interval: 7000, // Slide every 7 seconds
      pauseOnHover: true, // Pause when hovered
      arrows: true, // Show navigation arrows
      pagination: true, // Show dots navigation
      heightRatio: 0, // Enables height calculation based on widths
      updateOnMove: true, // Updates height on slide movement
      autoHeight: true, // Automatically adjusts height
      speed: 800, // Animation speed
      easing: 'ease', // Animation curve
      breakpoints: {
        // Adjust settings for different screen sizes
        1024: { perPage: 1 }, // Show 1 slide on smaller screens
        768: { perPage: 1 },
      },
    }).mount();
    
    // Additional function to equalize heights
    function equalizeHeights() {
      const slides = document.querySelectorAll('.splide__slide');
      let maxHeight = 0;
      
      // Reset heights first
      slides.forEach(slide => {
        slide.style.height = 'auto';
        const height = slide.offsetHeight;
        maxHeight = Math.max(maxHeight, height);
      });
      
      // Set all slides to max height
      slides.forEach(slide => {
        slide.style.height = maxHeight + 'px';
      });
    }
    
    // Run on load and resize
    window.addEventListener('load', equalizeHeights);
    window.addEventListener('resize', equalizeHeights);
  }
});
