document.addEventListener("DOMContentLoaded", () => {
  const toggleMobFilter = () => {
    const mobFilter = document.querySelector(".shop-filter");
    const openMobFilter = document.querySelector(".shop-mob-filter-btn");
    const closeMobFilter = document.querySelector(".shop-filter__mob-close");
    openMobFilter.addEventListener("click", () => {
      mobFilter.classList.contains("is-hidden")
        ? (mobFilter.classList = "shop-filter")
        : (mobFilter.classList = "shop-filter is-hidden");
    });
    closeMobFilter.addEventListener("click", () => {
      !mobFilter.classList.contains("is-hidden")
        ? (mobFilter.classList = "shop-filter is-hidden")
        : null;
    });
  };
  toggleMobFilter();
});
