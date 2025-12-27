const phone = document.getElementById("phone");

phone?.addEventListener("input", () => {
  phone.value = phone.value.replace(/\D/g, "").slice(0, 10);
});

function validateForm() {
  alert("Thank you! We will contact you shortly.");
}
