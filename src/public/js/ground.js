// document
//   .getElementById("joinGroupForm")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();
//     const name = document.getElementById("name").value;

//     // Hiển thị thông báo bằng SweetAlert2
//     Swal.fire({
//       title: "Cảm ơn!",
//       text: `Cảm ơn ${name} đã tham gia nhóm của chúng tôi!`,
//       icon: "success",
//       confirmButtonText: "Đồng Ý",
//       background: "#fff",
//       color: "#333",
//       customClass: {
//         confirmButton: "swal-button",
//       },
//     }).then(() => {
//       // Xóa nội dung các trường nhập liệu sau khi người dùng nhấn "Đồng Ý"
//       document.getElementById("joinGroupForm").reset();
//     });
//   });

// //
// function handleSubmit(event) {
//   event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

//   // Hiện thông báo
//   Swal.fire({
//     title: "Đăng Ký Thành Công!",
//     text: "Cảm ơn bạn đã đăng ký tham gia nhóm của chúng tôi!",
//     icon: "success",
//     confirmButtonText: "Tiếp Tục",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       // Chuyển tới trang newground
//       window.location.href = "/newground";
//     }
//   });
// }
