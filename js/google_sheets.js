const scriptURL = 'https://script.google.com/macros/s/AKfycbyEByHb3w7gn7RxzcoWykG2B_T-mDkVnvDnd0e0r_krH_dX1nk/exec'
const form = document.forms['contact-form']

// Send form data to Google sheets
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you for contacting us! We will be in touch soon."))
        .catch(error => console.error('Error!', error.message))
    form.reset()
})

const subscribeURL = "https://script.google.com/macros/s/AKfycbz3VAGBDh9xiZ0ScPEcMW5xZx3VLghr0tnjfpn7VbQI8W0-HS5j/exec"
const form2 = document.forms['subscribe']

form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(subscribeURL, { method: 'POST', body: new FormData(form2) })
        .then(response => alert("Thank you for subscribing!"))
        .catch(error => console.error('Error!', error.message))
    form2.reset()
})