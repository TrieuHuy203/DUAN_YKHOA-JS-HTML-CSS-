const scrollUpButton = document.getElementById("scrollUpButton");
const checkmark = document.getElementById("checkmark");
const successMessage = document.getElementById("successMessage");
const confirmation = document.getElementById("confirmation");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
};

scrollUpButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.getElementById("diagnosisForm").onsubmit = function (event) {
  event.preventDefault(); // Ngăn chặn việc gửi form theo cách mặc định

  // Hiện dấu tích và thông báo thành công
  checkmark.style.display = "block";
  successMessage.style.display = "block";

  // Đặt lại form
  setTimeout(() => {
    document.getElementById("diagnosisForm").reset();
    document.getElementById("imagePreview").style.display = "none"; // Ẩn hình ảnh xem trước
    checkmark.style.display = "none"; // Ẩn dấu tích
    successMessage.style.display = "none"; // Ẩn thông báo
    confirmation.style.display = "block"; // Hiện form xác nhận
  }, 2000); // Thời gian giữ dấu tích và thông báo là 2 giây
};

// Xem trước hình ảnh
document.getElementById("image").onchange = function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const imgPreview = document.getElementById("imagePreview");
    imgPreview.src = e.target.result;
    imgPreview.style.display = "block"; // Hiện hình ảnh xem trước
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.getElementById("imagePreview").style.display = "none"; // Ẩn hình ảnh nếu không có tệp
  }
};

// Xử lý nút "Có" và "Không" trong form xác nhận
document.getElementById("yesButton").onclick = function () {
  window.location.href = "/home"; // Quay lại trang chủ
};

document.getElementById("noButton").onclick = function () {
  confirmation.style.display = "none"; // Ẩn form xác nhận
};
