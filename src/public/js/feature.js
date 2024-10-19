// Tương tác với tính năng trên trang
document.addEventListener("DOMContentLoaded", function () {
  const featureButtons = document.querySelectorAll(".btn-learn-more");

  featureButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const featureId = this.dataset.feature;
      alert(`Bạn đang khám phá tính năng ${featureId}`);
    });
  });
});
