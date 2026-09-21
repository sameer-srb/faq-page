const buttons = document.querySelectorAll(".faq-arrow");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.closest(".faq-item");

    faqItem.classList.toggle("active");
  });
});
