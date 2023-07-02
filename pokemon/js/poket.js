//상단 메뉴 글리치 효과
function glitch(element) {
  let count = 0;
  setInterval(() => {
    // element
    const skew = Math.random() * 20 - 10;
    // element::before
    const top1 = Math.random() * 100;
    const btm1 = Math.random() * 100;
    // element::after
    const top2 = Math.random() * 100;
    const btm2 = Math.random() * 100;

    element.style.setProperty("--skew", `${skew}deg`);
    element.style.setProperty("--t1", `${top1}%`);
    element.style.setProperty("--b1", `${btm1}%`);
    element.style.setProperty("--t2", `${top2}%`);
    element.style.setProperty("--b2", `${btm2}%`);
    element.style.setProperty("--scale", `1`);

    count++;

    if (count % 15 === 0) {
      const bigSkew = Math.random() * 180 - 90;
      element.style.setProperty("--skew", `${bigSkew}deg`);
    }

    if (count % 30 === 0) {
      const bigScale = 1 + Math.random() / 2;
      element.style.setProperty("--scale", `${bigScale}`);
    }
  }, 100);
}

const glich = document.querySelector("#glich h1");
glitch(glich);
// 포켓볼 클릭시 사이트연결 메뉴 등장
let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".ball");
toggle.onclick = function () {
  menu.classList.toggle("active");
};
//포스터 슬라이드 이벤트
const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["prev", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");

class Carousel {
  constructor(container, item, controls) {
    this.CarouselContainer = container;
    this.CarouselControls = controls;
    this.CarouselArray = [...item];
  }

  updateGallery() {
    this.CarouselArray.forEach((el) => {
      el.classList.remove("gallery-item1");
      el.classList.remove("gallery-item2");
      el.classList.remove("gallery-item3");
      el.classList.remove("gallery-item4");
      el.classList.remove("gallery-item5");
    });

    this.CarouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className == "gallery-controls-prev") {
      this.CarouselArray.unshift(this.CarouselArray.pop());
    } else {
      this.CarouselArray.push(this.CarouselArray.shift());
    }
    this.updateGallery();
  }
  setControls() {
    this.CarouselControls.forEach((control) => {
      galleryControlsContainer.appendChild(
        document.createElement("button")
      ).className = `gallery-controls-${control}`;
      document.querySelector(`.gallery-controls-${control}`).innerText =
        control;
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(
  galleryContainer,
  galleryItems,
  galleryControls
);

exampleCarousel.setControls();
exampleCarousel.useControls();
