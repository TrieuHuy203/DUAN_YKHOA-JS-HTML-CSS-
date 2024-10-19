document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy thông tin người dùng từ form
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const symptoms = document.getElementById("symptoms").value;

    // Hiện thông báo đặt lịch thành công
    document.getElementById("confirmation-message").classList.remove("hidden");

    // Xóa dữ liệu đã nhập
    this.reset();

    // Hiển thị thông tin đã gửi khi nhấn nút "Xem Thông Tin"
    document
      .getElementById("view-info-button")
      .addEventListener("click", function () {
        alert(
          `Thông Tin Đăng Ký:\nHọ và Tên: ${fullName}\nEmail: ${email}\nSố Điện Thoại: ${phone}\nNgày Khám: ${date}\nThời Gian Khám: ${time}\nTriệu Chứng: ${symptoms}`
        );
      });

    // Đóng thông báo
    document
      .getElementById("close-message-button")
      .addEventListener("click", function () {
        document.getElementById("confirmation-message").classList.add("hidden");
      });
  });
