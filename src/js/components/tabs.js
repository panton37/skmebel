document.addEventListener("DOMContentLoaded", () => {
  const tabs = () => {
    const links = document.querySelectorAll(".project h2 a");
    const imageContainer = document.querySelector(".project-img-container");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        links.forEach(
          (el) => (el.parentElement.classList = "project-header caption-36")
        );
        e.preventDefault();
        e.stopImmediatePropagation();
        let currentIndex = e.target.dataset.index;
        imageContainer.classList = `project-img-container project-bg-${currentIndex}`;
        link.parentElement.classList =
          "project-header caption-36 project-header_active";
      });
    });
  };

  tabs();
});
