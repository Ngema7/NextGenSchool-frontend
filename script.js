/*   
       navbar 

*/
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const marqueeWrapper = document.querySelector(".marquee-wrapper");

// Hamburger toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("show");
});

// Close sidebar button
closeBtn.addEventListener("click", () => {
  hamburger.classList.remove("active");
  sidebar.classList.remove("show");
});

// Click outside sidebar to close
sidebar.addEventListener("click", (e) => {
  if (e.target === sidebar) {
    hamburger.classList.remove("active");
    sidebar.classList.remove("show");
  }
});

// Hide marquee completely on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    marqueeWrapper.style.display = "none";
  } else {
    marqueeWrapper.style.display = "block";
  }
});

// Close sidebar on window resize > 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    sidebar.classList.remove("show");
  }
});

/*     our Expertsss   */

const wrapper = document.querySelector(".faculty-wrapper");
const cards = Array.from(wrapper.children);
const dotsContainer = document.querySelector(".dots");
let index = 0;

function getVisibleCards() {
  if (window.innerWidth > 1024) return 4;
  if (window.innerWidth > 768) return 3;
  return 1;
}

function createDots() {
  dotsContainer.innerHTML = "";
  const visible = getVisibleCards();
  const dotsCount = cards.length - visible;
  for (let i = 0; i <= dotsCount; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateSlider(instant = false) {
  const cardWidth = cards[0].offsetWidth + 25;
  const visible = getVisibleCards();

  if (index > cards.length - visible) index = 0;

  const offset = index * cardWidth;
  wrapper.style.transition = instant ? "none" : "transform 0.5s ease";
  wrapper.style.transform = `translateX(-${offset}px)`;

  const dots = document.querySelectorAll(".dot");
  dots.forEach((d) => d.classList.remove("active"));
  const activeIndex = index >= dots.length ? 0 : index;
  if (dots[activeIndex]) dots[activeIndex].classList.add("active");
}

function nextSlide() {
  index++;
  const visible = getVisibleCards();
  if (index > cards.length - visible) index = 0;
  updateSlider();
}

let interval = setInterval(nextSlide, 3000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
}

wrapper.addEventListener("mouseenter", () => clearInterval(interval));
wrapper.addEventListener(
  "mouseleave",
  () => (interval = setInterval(nextSlide, 3000)),
);

window.addEventListener("resize", () => {
  createDots();
  updateSlider(true);
});

createDots();
updateSlider();





//                           




//             for animation 



// for hero section animation
gsap.registerPlugin(ScrollTrigger);

// ===== Navbar links animation on load =====
gsap.from(".navbar ul li", {
  opacity: 0,
  y: -20,
  stagger: 0.15,
  duration: 1,
  ease: "power3.out"
});

// ===== Hamburger animation =====
gsap.from("#hamburger span", {
  opacity: 0,
  x: -20,
  stagger: 0.1,
  duration: 0.8,
  ease: "power2.out"
});

// ===== Hero overlay fade + parallax =====
gsap.from(".hero-overlay", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power2.out"
});

// ===== Hero text animation =====
gsap.from(".hero-content h1", {
  opacity: 0,
  y: 50,
  scale: 0.95,
  rotateX: -10,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    end: "bottom top",
    scrub: 1
  }
});

gsap.from(".hero-content p", {
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top center+=50",
    end: "bottom top",
    scrub: 1
  }
});

// ===== CTA button hover + scroll effect =====
gsap.from(".cta", {
  opacity: 0,
  scale: 0.8,
  y: 20,
  duration: 1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 60%",
    scrub: 1
  }
});

document.querySelector(".cta").addEventListener("mouseenter", () => {
  gsap.to(".cta", { scale: 1.05, duration: 0.3, ease: "power2.out" });
});
document.querySelector(".cta").addEventListener("mouseleave", () => {
  gsap.to(".cta", { scale: 1, duration: 0.3, ease: "power2.out" });
});

// ===== Hero video parallax on scroll =====
gsap.to(".hero-video", {
  y: -100,
  scale: 1.05,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  }
});


//   mission vision animation
gsap.from(".box-mission", {
  opacity: 0,
  y: 80,
  scale: 0.8,
  rotate: -10,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box-mission",
    start: "top 90%",
    end: "top 60%",
    scrub: 1
  }
});

// Vision Box
gsap.from(".box-vision", {
  opacity: 0,
  y: 80,
  scale: 0.8,
  rotate: 10,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box-vision",
    start: "top 90%",
    end: "top 60%",
    scrub: 1
  }
});


//   contact section animation
gsap.from(".info-section .container", {
  opacity: 0,
  y: 60,
  scale: 0.95,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".info-section",
    start: "top 95%",
    end: "top 50%",
    scrub: 1.2
  }
});


gsap.utils.toArray(".info-section .card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    rotationX: 10,
    rotationY: -6,
    scale: 0.9,
    transformPerspective: 600,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      end: "top 60%",
      scrub: 1.5
    }
  });

    gsap.from(card.querySelectorAll(".list li"), {
    opacity: 0,
    y: 20,
    x: -10,
    stagger: 0.15,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      end: "top 60%",
      scrub: 1.2
    }
  });
});


    // galeryyyy
gsap.utils.toArray(".flex-item").forEach((item, i) => {
  gsap.from(item, {
    y: 100,
    rotationY: 30, 
    rotationX: 15, 
    scale: 0.8,
    opacity: 0,
    transformPerspective: 600, 
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      end: "top 50%",
      scrub: 1.8
    }
  });
});


gsap.from(".flex-gallery", {
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".flex-collage-gallery",
    start: "top 95%",
    end: "top 50%",
    scrub: 1.5
  }
});




// testimonial 

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".testimonial-box").forEach((box, i) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotation: i % 2 === 0 ? 5 : -5,
    duration: 1,
    ease: "power3.out"
  });

  const bg = box.querySelector("::before");
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1
    },
    rotate: 10,
    ease: "none"
  });
});


// expertsss
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".rotating-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      end: "bottom 20%",
      scrub: 2
    },
    opacity: 0,
    y: 60 + i * 10,
    scale: 0.9,
    rotation: i % 2 === 0 ? 5 : -5,
    ease: "power3.out",
    duration: 2
  });
});


// map 
gsap.from(".location", {
  y: 100,
  opacity: 0,
  scale: 0.95,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".location",
    start: "top 85%",
    end: "top 50%",
    scrub: 2,
    toggleActions: "play none none none"
  }
});

gsap.from(".map-container", {
  x: 80,
  opacity: 0,
  scale: 0.95,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".map-container",
    start: "top 85%",
    end: "top 50%",
    scrub: 2,
    toggleActions: "play none none none"
  }
});

gsap.from(".form-container", {
  x: -80,
  opacity: 0,
  scale: 0.95,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".form-container",
    start: "top 85%",
    end: "top 50%",
    scrub: 2,
    toggleActions: "play none none none"
  }
});


// footer  
// Footer main fade-in and slide-up
gsap.from(".footer", {
  y: 100,
  opacity: 0,
  duration: 1.8,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,
    toggleActions: "play none none none"
  }
});

// Footer sections parallax horizontal move
gsap.from(".footer-section.about", {
  x: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    end: "top 50%",
    scrub: 2
  }
});

gsap.from(".footer-section.links", {
  x: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    end: "top 50%",
    scrub: 2
  }
});

gsap.from(".footer-section.contact", {
  x: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    end: "top 50%",
    scrub: 2
  }
});

// Footer bottom text fade in with slight upward movement
gsap.from(".footer-bottom", {
  y: 30,
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
    end: "top 60%",
    scrub: 2
  }
});










//

//marquee fetch backend

//



async function loadMarqueeForUser() {
  try {
    const res = await fetch(`${process.env.ADMIN_API}/api/marquee`);
    const data = await res.json();

    if (!data.length) return;

    // join all marquee texts
    document.getElementById("marqueeText").innerHTML =
      data.map(item => item.text).join(" &nbsp; ✦ &nbsp; ");
  } catch (err) {
    console.error("Failed to load marquee", err);
  }
}

loadMarqueeForUser();



//

//== news fetch backend 

//
async function loadNewsForUser() {
  try {
    const res = await fetch(`${process.env.ADMIN_API}/api/news`);
    const data = await res.json();

    const list = document.getElementById("newsList");
    list.innerHTML = "";

    data.forEach(item => {
      const li = document.createElement("li");

      const date = new Date(item.date).toLocaleDateString();

      li.innerHTML = `
        <span>${item.title}</span>
        <small>${date}</small>
      `;

      list.appendChild(li);
    });
  } catch (err) {
    console.error("Failed to load news", err);
  }
}

loadNewsForUser();


//

//    events

//

