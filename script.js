
document.addEventListener("DOMContentLoaded", () => {
  // PRELOADER
  const loader = document.getElementById("loader");

  function hideLoader() {
    if (loader) {
      loader.classList.add("loader-hidden");
      setTimeout(() => {
        loader.style.display = "none";
      }, 600);
    }
  }

  window.addEventListener("load", hideLoader);
  setTimeout(hideLoader, 3000);

  // MOBILE MENU
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuToggle.classList.toggle("active");
      menuToggle.textContent =
        nav.classList.contains("active") ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.textContent = "☰";
      });
    });
  }

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // SCROLL ANIMATIONS
  const animatedElements = document.querySelectorAll(
    ".service-card, .car-card, .electric-card, .about-item"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animatedElements.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  } else {
    animatedElements.forEach(element => {
      element.classList.add("show");
    });
  }

  // CONTACT FORM
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();

      const name = contactForm.elements["name"].value.trim();
      const phone = contactForm.elements["phone"].value.trim();
      const message = contactForm.elements["message"].value.trim();

      if (!name || !phone || !message) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }

      alert(
        "Спасибо, " + name +
        "! Форма заполнена. Для отправки заявки необходимо подключить сервер."
      );

      contactForm.reset();
    });
  }

  // CURRENT YEAR
  const footerYear = document.querySelector(".footer .container p:last-child");

  if (footerYear) {
    footerYear.textContent =
      "© " + new Date().getFullYear() +
      " RED LINE. Все права защищены.";
  }

});
