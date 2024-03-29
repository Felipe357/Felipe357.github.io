const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  const carouselImages = carousel.querySelector(".carousel-images");
  const carouselIndicators = carousel.querySelectorAll(".carousel-indicators .indicator");

  let index = 0;

  function updateCarousel() {
    carouselImages.style.transform = `translateX(-${index * 33.333}%`;
    carouselIndicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  carouselIndicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });
  });

  setInterval(() => {
    index = (index + 1) % 3;
    updateCarousel();
  }, 5000);
});

const downloadBtn = document.getElementById('curriculo');

downloadBtn.addEventListener('click', () => {
  // Crie um elemento <a> para iniciar o download
  const downloadLink = document.createElement('a');
  downloadLink.href = 'https://github.com/Felipe357/Felipe357.github.io/blob/main/curriculo.png';
  downloadLink.click();
});