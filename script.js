function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.6,
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
smoothScroll();

function navDropdown() {
  var menuToggle = document.getElementById("menuToggle");

  var menuBar = gsap.timeline();

  menuBar.to(
    ".bar-1",
    0.5,
    {
      attr: {
        d: "M8,2 L2,8",
      },
      x: 1,
      ease: "Power2.easeInOut",
    },
    "start"
  );

  menuBar.to(
    ".bar-2",
    0.5,
    {
      attr: {
        d: "M8,8 L2,2",
      },
      x: 1,
      ease: "Power2.easeInOut",
    },
    "start"
  );

  menuBar.reverse();

  var tl = gsap.timeline({
    paused: true,
  });

  tl.to(".fullpage-menu", {
    duration: 0,
    display: "block",
    ease: "none",
  });
  tl.from(".menu-bg", {
    duration: 0.5,
    y: "-100%",
    ease: "sine.out",
  });

  tl.reverse();

  menuToggle.addEventListener("click", function () {
    menuBar.reversed(!menuBar.reversed());
    tl.reversed(!tl.reversed());
  });
}
navDropdown();

function reviewSwiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}
reviewSwiper();

function cursorAnimation() {
  const isTouchDevice = "ontouchstart" in window;
  const createCursorFollower = () => {
    const $el = document.querySelector(".cursor-follower");

    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e;

      const isTargetLinkOrBtn = target?.closest("button");

      gsap.to($el, {
        x: x - 6,
        y: y - 5,
        duration: 1,
        ease: "power4",
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
      });
    });

    document.addEventListener("mouseleave", (e) => {
      gsap.to($el, {
        duration: 1,
        opacity: 0,
      });
    });
  };

  if (!isTouchDevice) {
    createCursorFollower();
  }
}
cursorAnimation();

function navAnimation() {
  document.querySelectorAll("#elem1").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      showing = dets.target;
      document.querySelector("#elem1 .overlay").style.width = "100%";
      document.querySelector("#elem1 h2").style.color = "#ffffff";
      document.querySelector("#elem1 h2 i").style.color = "#0f0f0f";
    });
    elem.addEventListener("mouseleave", function (dets) {
      document.querySelector("#elem1 .overlay").style.width = "0%";
      document.querySelector("#elem1 h2").style.color = "#0F0F0F";
      document.querySelector("#elem1 h2 i").style.color = "#0f0f0f";
    });
  });

  document.querySelectorAll("#elem2").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      document.querySelector("#elem2 .overlay").style.width = "100%";
      document.querySelector("#elem2 h2").style.color = "#ffffff";
      document.querySelector("#elem2 h2 i").style.color = "#0f0f0f";
    });
    elem.addEventListener("mouseleave", function (dets) {
      document.querySelector("#elem2 .overlay").style.width = "0%";
      document.querySelector("#elem2 h2").style.color = "#0F0F0F";
      document.querySelector("#elem2 h2 i").style.color = "#0f0f0f";
    });
  });

  document.querySelectorAll("#elem3").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      document.querySelector("#elem3 .overlay").style.width = "100%";
      document.querySelector("#elem3 h2").style.color = "#ffffff";
      document.querySelector("#elem3 h2 i").style.color = "#0f0f0f";
    });
    elem.addEventListener("mouseleave", function (dets) {
      document.querySelector("#elem3 .overlay").style.width = "0%";
      document.querySelector("#elem3 h2").style.color = "#0F0F0F";
      document.querySelector("#elem3 h2 i").style.color = "#0f0f0f";
    });
  });

  document.querySelectorAll("#elem4").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      document.querySelector("#elem4 .overlay").style.width = "100%";
      document.querySelector("#elem4 h2").style.color = "#ffffff";
      document.querySelector("#elem4 h2 i").style.color = "#0f0f0f";
    });
    elem.addEventListener("mouseleave", function (dets) {
      document.querySelector("#elem4 .overlay").style.width = "0%";
      document.querySelector("#elem4 h2").style.color = "#0F0F0F";
      document.querySelector("#elem4 h2 i").style.color = "#0f0f0f";
    });
  });

  document.querySelectorAll("#elem5").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      document.querySelector("#elem5 .overlay").style.width = "100%";
      document.querySelector("#elem5 h2").style.color = "#ffffff";
      document.querySelector("#elem5 h2 i").style.color = "#0f0f0f";
    });
    elem.addEventListener("mouseleave", function (dets) {
      document.querySelector("#elem5 .overlay").style.width = "0%";
      document.querySelector("#elem5 h2").style.color = "#0F0F0F";
      document.querySelector("#elem5 h2 i").style.color = "#0f0f0f";
    });
  });
}
navAnimation();

function loaderAniumation() {
  gsap.to(".pre-loader .loader-span", {
    marginTop: "100%",
    ease: "back.out",
    duration: 0.5,
    delay: 2,
  });
  gsap.to(".pre-loader .loader-span", {
    marginTop: "120%",
    ase: "power4.out",
    duration: 0.5,
    delay: 2.5,
  });
  gsap.to(".pre-loader .loader-span", {
    marginTop: "0%",
    ease: "power4.out",
    duration: 1,
    delay: 3.5,
  });
  gsap.to(".pre-loader", {
    backgroundColor: "transparent",
    ease: "power4.out",
    duration: 1,
    delay: 4,
  });
  gsap.to(".pre-loader .loader-span", {
    marginTop: "-120%",
    ease: "power4.out",
    duration: 1,
    delay: 4.5,
  });
  gsap.to(".pre-loader", {
    display: "none",
    delay: 4.5,
  });
  gsap.to(".pre-loader .loader-span", {
    display: "none",
    delay: 4.5,
  });
}
loaderAniumation();

function horizontalScroll() {
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(".horizontal-section");
    const container = document.querySelector(".container");

    gsap.to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () =>
          "+=" + (container.scrollWidth - document.documentElement.clientWidth),
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "0% 50%",
        onEnter: () => section.classList.add("active"),
        onLeaveBack: () => section.classList.remove("active"),
      });
    });
  });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "50% 50%",
      end: "150% 50%",
      // markers:true,
      scrub: 2,
    },
  });
  tl.to(".cntr-1", {
    rotate: "-45deg",
    transform: "translate(-150%, -50%)",
    ease: "sine.out",
    duration: 1,
  });
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "100% 50%",
      end: "200% 50%",
      // markers:true,
      scrub: 2,
    },
  });
  tl1.to(".horizontal-section", {
    backgroundColor: "#12447c",
    ease: "sine.out",
  });
  tl1.to(".section-content", {
    color: "#6a91bd",
    ease: "sine.out",
  });
  tl1.from(".cntr-2", {
    rotate: "45deg",
    transform: "translate(50%, 100%)",
    ease: "sine.out",
    delay: 0.5,
    duration: 1,
  });
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "320% 50%",
      end: "420% 50%",
      // markers:true,
      scrub: 2,
    },
  });
  tl2.to(".horizontal-section", {
    backgroundColor: "#be5e38",
    ease: "sine.out",
  });
  tl2.to(".section-content", {
    color: "#FFA887",
    ease: "sine.out",
  });
  tl2.from(".cntr-3", {
    transform: "translate(0%, -150%)",
    ease: "sine.out",
    delay: -0.5,
    duration: 1,
  });
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "530% 50%",
      end: "630% 50%",
      // markers:true,
      scrub: 2,
    },
  });
  tl3.to(".horizontal-section", {
    backgroundColor: "#56382c",
    ease: "sine.out",
  });
  tl3.to(".section-content", {
    color: "#FFA887",
    ease: "sine.out",
  });
  tl3.from(".cntr-4", {
    rotate: "-45deg",
    transform: "translate(50%, -100%)",
    ease: "sine.out",
    delay: -0.5,
    duration: 1,
  });
}
horizontalScroll();

function marqueAnimation() {
  gsap.to(".marque", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque2", {
    transform: "translateX(0%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque3", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque4", {
    transform: "translateX(0%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque5", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
  gsap.to(".marque6", {
    transform: "translateX(-200%)",
    repeat: -1,
    duration: 10,
    ease: "none",
  });
}
marqueAnimation();

function goodGutSeedAnimation() {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      start: "25% 50%",
      end: "35% 50%",
      // markers:true,
      scrub: 2,
    },
  });
  tl4.from(
    ".fleft",
    {
      x: 80,
      scale: 0.8,
      opacity: 0,
      ease: "sine.out",
      duration: 1
    },
    "A"
  );
  tl4.from(
    ".fright",
    {
      x: -80,
      scale: 0.8,
      opacity: 0,
      ease: "sine.out",
      duration: 1
    },
    "A"
  );
}
goodGutSeedAnimation();
