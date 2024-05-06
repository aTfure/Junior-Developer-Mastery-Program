const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".control"); // Changed from .controls to .control
const allSections = document.querySelector(".main-content"); // Changed from querySelectorAll to querySelector

function PageTransitions() {
  // Button click active class
  sectBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn?.classList.remove("active-btn");
      this.classList.add("active-btn");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // show the clicked section
      const element = document.getElementById(this.dataset.id);
      element.classList.add("active");
    });
  });
}

PageTransitions();
