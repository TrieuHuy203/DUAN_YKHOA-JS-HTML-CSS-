function searchDoctors() {
  const input = document.getElementById("search").value.toLowerCase();
  const doctorCards = document.querySelectorAll(".doctor-card");

  doctorCards.forEach((card) => {
    const doctorName = card.querySelector("h3").innerText.toLowerCase();
    if (doctorName.includes(input)) {
      card.style.display = "flex"; // Hiển thị card
    } else {
      card.style.display = "none"; // Ẩn card
    }
  });
}
