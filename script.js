const form = document.getElementById('form')
const email = document.getElementById('email')
const inputName = document.getElementById('name')
const age = document.getElementById('age')
const studyReason = document.getElementById('study-reason')
const errorElement = document.getElementById('errorElement')

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value === null) {
        messages.push('email is required')
    } else if (!validateEmail(email.value)) {
        messages.push('email is invalid')
    }
    if (inputName.value === '' || inputName.value === null) {
        messages.push('name is required')
    }
    if (age.value === '' || age.value === null) {
        messages.push('age is required')
    }
    if (studyReason.value === '' || studyReason.value === null) {
        messages.push('study reason minimum length is 10 characters')
    }
    errorElement.innerHTML = messages.join('<br /> ')
    if (messages.length > 0) e.preventDefault()
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}