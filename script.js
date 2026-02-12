/* ================= LOADING SCREEN ================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 600);
  }
});

/* ================= ACTIVE NAVBAR ================= */

const currentPage = location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


/* ================= SCROLL REVEAL ================= */

const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 60) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


/* ================= PHOTOCARD FLIP ================= */

document.querySelectorAll(".photocard").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
});


/* ================= IMAGE MODAL ================= */

function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}


/* ================= TYPING INTRO TEXT ================= */

const text = "STRAY KIDS EVERYWHERE ALL AROUND THE WORLD";
let i = 0;

function typing() {
  const target = document.getElementById("typing-text");
  if (!target) return;

  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 60);
  }
}

typing();