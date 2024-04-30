const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function PageTransitions() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      if (currentBtn) {
        currentBtn.classList.remove("active-btn");
      }
      this.classList.add("active-btn");
    });
  }

  // Section Active
  //   allSections.forEach((section) => {
  //     section.addEventListener("click", (e) => {
  //       console.log(e.target);
  //     });
  //   });
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove active class from all sections
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransitions();
