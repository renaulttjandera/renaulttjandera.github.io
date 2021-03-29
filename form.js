const scriptURL = "https://script.google.com/macros/s/AKfycbxBqC9nmekPmJCe_PzkE6C_c1a7uDKNbuyEsR6d9GOlAO0jMbWE7Qqz-KPoFWeBjln6/exec";
const form = document.forms["contact-form"];
const submitBtn = document.querySelector(".submit-btn");
const loadingBtn = document.querySelector(".loading-btn");
const successAlert = document.querySelector(".alert-success");
const failedAlert = document.querySelector(".alert-danger");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadingBtn.classList.toggle("d-none");
  submitBtn.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      loadingBtn.classList.toggle("d-none");
      submitBtn.classList.toggle("d-none");
      successAlert.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => {
      loadingBtn.classList.toggle("d-none");
      submitBtn.classList.toggle("d-none");
      console.error("Error!", error.message);
      failedAlert.classList.toggle("d-none");
    });
});
