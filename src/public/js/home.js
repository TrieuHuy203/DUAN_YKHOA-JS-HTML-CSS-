document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử HTML
  const modal = document.getElementById("videoModal");
  const btn = document.querySelector(".watch-video");
  const closeModal = document.querySelector(".close");

  // Mở modal khi nhấn nút
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // Đóng modal khi nhấn nút close (dấu X)
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Đóng modal khi nhấn ra ngoài modal
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
