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