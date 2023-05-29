document.addEventListener("DOMContentLoaded", () => {
  const filterShowHide = () => {
    const formItems = document.querySelectorAll(".form-item_toggled");
    formItems.forEach((item) => {
      const btn = item.querySelector(".form-item__header-wrapper svg");
      const list = item.querySelector(".filter-set");
      btn.addEventListener("click", (e) => {
        if (!list.classList.contains("filter-set_hide")) {
          list.classList = "filter-set filter-set_hide";
          btn.classList = "filter-show-hide setbtn__show";
        } else {
          list.classList = "filter-set";
          btn.classList = "filter-show-hide";
        }
      });
    });
  };
  filterShowHide();
});
