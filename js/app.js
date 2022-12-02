//BURGER

function toggleMenu() {
  document.documentElement.classList.toggle("menu-open");
  document.documentElement.classList.toggle("lock");
}
document.querySelector(".header__menu").addEventListener("click", () => {
  toggleMenu();
});
for (const i of document.querySelectorAll(".header__item")) {
  i.addEventListener("click", () => {
    if (document.documentElement.classList.contains("menu-open")) {
      toggleMenu();
    }
  });
}

//SCROLL

const defaultOffset = 0;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  if (scrollPosition() > defaultOffset) {
    //scroll down
    document.documentElement.classList.add("scroll");
  } else if (scrollPosition() <= defaultOffset) {
    //scroll up
    document.documentElement.classList.remove("scroll");
  }
});

//THEME SWITCHER

function getWinTheme() {
  let winTheme;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    winTheme = "dark";
  } else {
    winTheme = "light";
  }
  return winTheme;
}
if (document.getElementById("theme__button")) {
  const themeButton = document.getElementById("theme__button");

  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      themeButton.checked = true;
    }
  } else {
    if (getWinTheme() === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", getWinTheme());
    } else if (getWinTheme() === "light") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", getWinTheme());
    }
  }

  themeButton.addEventListener("change", () => {
    if (themeButton.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
}

//TYPING TEXT

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Frontend Developer"];
const typingDelay = 70;
const erasingDelay = 100;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//HERO BUTTON

document.querySelector(".hero__button").addEventListener("click", (event) => {
  window.scrollTo({
    top: document.querySelector(".about").offsetTop - document.querySelector(".header").offsetHeight,
    behavior: "smooth",
  });
});

//OBSERVER

const getId = (link) => link.getAttribute("href").replace("#", "");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".header__link").forEach((link) => {
          link.classList.toggle("active", getId(link) === entry.target.id);
        });
      }
    });
  },
  {
    threshold: 0.8,
  }
);

document.querySelectorAll(".observe").forEach((section) => {
  observer.observe(section);
});
document.querySelector(".header__list").addEventListener("click", (event) => {
  if (event.target.classList.contains("header__link")) {
    event.preventDefault();

    window.scrollTo({
      top: document.getElementById(getId(event.target)).offsetTop - document.querySelector(".header").offsetHeight,
      behavior: "smooth",
    });
  }
});

//SWIPER

const portfolioSlider = new Swiper(".portfolio__slider", {
  watchOverflow: false,
  spaceBetween: 20,

  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: true,
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  // Pagination
  pagination: {
    el: ".portfolio__pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".portfolio__button-next",
    prevEl: ".portfolio__button-prev",
    enabled: true,
  },

  breakpoints: {
    1: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      pagination: {
        enabled: true,
      },
      navigation: {
        enabled: false,
      },
    },
    499.98: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      pagination: {
        enabled: false,
      },
      navigation: {
        enabled: false,
      },
    },
    767.98: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      pagination: {
        enabled: false,
      },
      navigation: {
        enabled: true,
      },
    },
  },
});

//DEFINE MOBILE DEVICE

isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

if (isMobile.any()) {
  document.documentElement.classList.add("touch");
}
