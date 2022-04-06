// Automatically add form submission to Google Sheets
const subscribeURL = "https://script.google.com/macros/s/AKfycbxLNEpnRmDpJpjEVs392-yHN9uyCZTNUfn2k7vB3Ps1ochu_DEArwNLlG5MUk4wgrBL/exec"
const subForm = document.forms['subscribe']

subForm.addEventListener('submit', e => {
    e.preventDefault()
    fetch(subscribeURL, { method: 'POST', body: new FormData(subForm) })
        .then(response => alert("Thank you for subscribing!"))
        .catch(error => console.error('Error!', error.message))
    subForm.reset()
})