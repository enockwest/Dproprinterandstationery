
  // Toggle menu
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');
  menuBtn.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Home carousel
  let slideIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  function showSlides() {
    slides.forEach(s => s.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }
  setInterval(showSlides, 4000);

  // Products 3D carousel
  const products = document.querySelectorAll(".product");
  let angle = 0;
  function rotateProducts() {
    angle += 72; // 360° / 5 products
    products.forEach((product, i) => {
      const rotation = angle + i * 72;
      product.style.transform = `rotateY(${rotation}deg) translateZ(300px)`;
    });
  }
  setInterval(rotateProducts, 3000);

  // Initialize product positions
  products.forEach((product, i) => {
    const rotation = i * 72;
    product.style.transform = `rotateY(${rotation}deg) translateZ(300px)`;
  });

    const openMessage = document.getElementById("openMessage");
    const messagePopup = document.getElementById("messagePopup");
    const closeMessage = document.getElementById("closeMessage");

    openMessage.addEventListener("click", (e) => {
      e.preventDefault();
      messagePopup.style.display = "flex";
    });

    closeMessage.addEventListener("click", () => {
      messagePopup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === messagePopup) {
        messagePopup.style.display = "none";
      }
    });

    document.querySelector(".message-form").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Your message has been sent successfully!");
      messagePopup.style.display = "none";
    });
