// Automatically add form submission to Google Sheets
const subscribeURL = "https://script.google.com/macros/s/AKfycbz3VAGBDh9xiZ0ScPEcMW5xZx3VLghr0tnjfpn7VbQI8W0-HS5j/exec"
const subForm = document.forms['subscribe']

subForm.addEventListener('submit', e => {
    e.preventDefault()
    fetch(subscribeURL, { method: 'POST', body: new FormData(subForm) })
        .then(response => alert("Thank you for subscribing!"))
        .catch(error => console.error('Error!', error.message))
    subForm.reset()
})