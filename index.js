const errorDiv = document.querySelector('.error-div')
const input = document.querySelector('input')
const btn = document.querySelector('.btn')


function emailRegex (email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

function validateEmail () {
    // target user email that was input into form
    const email = input.value
    // check input for correct format
    
    // if form is not correct then show error text
    if (!emailRegex(email)) {
        errorDiv.textContent = 'Please provide a valid email'
    } else {
        errorDiv.textContent = ''
    }
}
btn.addEventListener('click', (e) => {
    e.preventDefault()
    validateEmail ()
    
})
