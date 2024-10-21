document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại sớm.");
    this.reset();
  });
