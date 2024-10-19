const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

// code điều hướng trang từ trang đăng nhập sang đăng ký khi ấn nút đăng nhập chính
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

// code điều hướng trang từ trang đăng ký sang đăng nhập khi ấn nút đăng nhập chính
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

// điều hướng trang khi nhập mk tên và ấn login
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn form gửi dữ liệu mặc định

    // Lấy giá trị từ input
    const username = document.getElementById("ten").value;
    const password = document.getElementById("matkhau").value;

    // Giả lập kiểm tra thông tin đăng nhập
    if (username === "admin" && password === "admin123") {
      // Hiển thị thông báo "Đăng nhập thành công"
      const loginMessage = document.getElementById("login-message");
      loginMessage.style.display = "block";

      // Đợi 1 giây trước khi hiển thị thanh loading
      setTimeout(() => {
        // Hiển thị thanh loading
        document.getElementById("loading").style.display = "flex";

        // Sau 1 giây điều hướng sang trang khác
        setTimeout(function () {
          window.location.href = "/home"; // Thay thế '/home' bằng URL trang bạn muốn
        }, 1000);
      }, 1000); // Thời gian hiển thị thông báo trước khi loading
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!"); // Thông báo lỗi
    }
  });

/////
document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    // Ngăn chặn chuyển trang
    event.preventDefault();

    // Hiển thị thông báo đăng ký thành công
    document.getElementById("successMessage").style.display = "block";

    // Xóa dữ liệu đã nhập
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
