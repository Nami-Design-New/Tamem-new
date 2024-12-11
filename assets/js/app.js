var mainSlider = new Swiper(".hero-swiper", {
  spaceBetween: 0,
  effect: "fade",
  loop: true,
  speed: 500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

const servicesSlider = new Swiper(".services-swiper", {
  spaceBetween: 24,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".service-button-next",
    prevEl: ".service-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

var partnersSlider = new Swiper(".clients-swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 12,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const startCounters = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counters = document.querySelectorAll(".counter span");

      counters.forEach((counter) => {
        const counterParent = counter.closest(".counter");
        const target = parseInt(counterParent.getAttribute("data-count"));
        let count = 0;
        const duration = 4000;
        const increment = target / (duration / 16);

        const updateCount = () => {
          count += increment;
          if (count < target) {
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });

      observer.disconnect();
    }
  });
};

const observer = new IntersectionObserver(startCounters, observerOptions);
const statisticsSection = document.querySelector(".statistics_section");

if (statisticsSection) {
  observer.observe(statisticsSection);
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Menu toggle functionality
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const layer = document.querySelector(".layer");

navLinks.querySelectorAll("li").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    layer.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuButton.contains(e.target)) {
    navLinks.classList.remove("active");
    layer.classList.remove("active");
  }
});

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  layer.classList.toggle("active");
});