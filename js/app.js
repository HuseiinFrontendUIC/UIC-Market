var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 100,
  slidesPerView: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperWrapper = document.querySelector(".swiper-wrapper");

PartnetsArrays.forEach((part) => {
  let partnerCard = `
    <div class="swiper-slide">
      <div div class="swiper-flex-container">
      <img src="${part.page}" />
      </div>
    </div>
    `;
  swiperWrapper.innerHTML += partnerCard;
});
