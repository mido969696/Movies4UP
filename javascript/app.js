var swiper = new Swiper(".popular-content", {
  slidePerView: 1,
  SpaceBetween: 50,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      SpaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      SpaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      SpaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      SpaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      SpaceBetween: 20,
    },
  },
});

//show video
let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closebtn = document.querySelector(".close-video");

playButton.onclick = () => {
  video.classList.add("show-video");
  //Auto Play when Click on Button
  console.log("play");
  myvideo.play();
};

closebtn.onclick = () => {
  video.classList.remove("show-video");
  //pause on close video
  myvideo.pause();
};

//Scroll-Progress-bar
// let scrollPrecentage = () => {
//   let scrollProgress = document.getElementById("progress");
//   let progressValue = document.getElementById("progress-value");
//   let pos = document.documentElement.scrollTop;
//   let calcHeight =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   let scrollValue = Math.round((pos * 100) / calcHeight);
//   scrollProgress.style.background = ` conic-gradient(#e70634 ${scrollValue}%, #2b2f38 ${scrollValue}%) `;
// };
// window.onscroll = scrollPrecentage;
// window.onload = scrollPrecentage;
