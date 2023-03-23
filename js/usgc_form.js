
const usgcFormScript = "https://script.google.com/macros/s/AKfycbz6EtfMt3VFgnW-BpmkMEcnPucap3OINPqXQnryDGt28FjtsvsjnK6fv9FtEPacH8UifA/exec"
const usgcForm = document.forms.namedItem("usgc-form")

usgcForm.addEventListener("submit", event => {
  event.preventDefault()
  data = new FormData(usgcForm);
  fetch(usgcFormScript, { method: "POST", body: data })
    .then(response => {
      alert("Thank you for registering!");
      usgcForm.reset();
      window.location.href = "https://ny-go.org/tournaments/usgc2023.html";
    })
    .catch(e => {
      alert("Error! Could not submit form. Please check your internet connection and try again. ")
      console.log(e.message)
    })
})