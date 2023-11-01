function lenis() {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
lenis();
function mouseCursor() {
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (dets) => {
    const X = dets.clientX;
    const Y = dets.clientY;
    gsap.to(cursor, {
      left: X - 11,
      top: Y - 11,
    });
  });
}
mouseCursor();
function swiper() {
  var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });
}
swiper();
function animcur() {
  const cursor = document.querySelector(".cursor");
  const logo = document.querySelector(".logo img");
  const text = document.querySelector(".text");
  const loop = document.querySelector(".loop");
  const links = document.querySelectorAll(".nav a");
  const button = document.querySelector(".but");
  const video = document.querySelector(".vid video");
  const page3 = document.querySelector(".page3");
  const slider = document.querySelector(".swiper-wrapper");
  logo.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 5,
      color: "white",
    });
  });

  logo.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1,
    });
  });
  text.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 5,
      color: "white",
    });
  });

  text.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1,
    });
  });
  loop.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 5,
      color: "white",
    });
  });

  loop.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1,
    });
  });
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(".cursor", {
        scale: 2,
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(".cursor", {
        scale: 1,
      });
    });
  });
  loop.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 5,
      color: "white",
    });
  });

  loop.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1,
    });
  });

  button.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 5,
      color: "white",
    });
  });

  button.addEventListener("mouseleave", () => {
    document.querySelector(".editable").innerHTML = "";
    gsap.to(".cursor", {
      scale: 1,
    });
  });

  video.addEventListener("mouseenter", () => {
    document.querySelector(".editable").innerHTML = "UNMUTE";
    gsap.to(".cursor", {
      scale: 5,
      color: "white",
    });
  });

  video.addEventListener("mouseleave", () => {
    document.querySelector(".editable").innerHTML = "";
    gsap.to(".cursor", {
      scale: 1,
    });
  });
  video.addEventListener("click", () => {
    if (video.muted) {
      video.muted = false;
      document.querySelector(".editable").innerHTML = "MUTE";
    } else {
      video.muted = true;
      document.querySelector(".editable").innerHTML = "UNMUTE";
    }
  });
  slider.addEventListener("mouseenter", () => {
    document.querySelector(".editable").innerHTML = "DRAG";
    gsap.to(".cursor", {
      scale: 5,
    });
  });

  slider.addEventListener("mouseleave", () => {
    document.querySelector(".editable").innerHTML = "";
    gsap.to(".cursor", {
      scale: 1,
    });
  });
}

animcur();

gsap.from(".page1 h2", {
  y: 100,
  opacity: 0,
});
gsap.from(".page1 p", {
  y: 100,
  delay: 0.5,
  opacity: 0,
  stagger: 0.3,
});
gsap.from(".page1 img", {
  x: -100,
  opacity: 0,
  delay: 1,
});
gsap.from(".vid", {
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".vid",
    scroller: "body",
    start: "top 50%",
  },
});
gsap.from(".but", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".vid",
    scroller: "body",
    start: "top 30%",
  },
});
gsap.from(".heading h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".heading h1",
    scroller: "body",
    start: "top 80%",
  },
});
gsap.from(".swiper-slide",{
  x: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".swiper-slide",
    scroller: "body",
    start: "top 70%",
  },
})
