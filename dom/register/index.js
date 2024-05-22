function onSubmit() {
    console.log("Button clicked")

    const registerForm = document.getElementById("register-form")
    if (registerForm.checkValidity()) {
        const firstName = document.getElementById("firstName").value
        const lastName = document.getElementById("lastName").value
        const bio = document.getElementById("bio").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        console.log(firstName, lastName, bio, email, password)
    }
    else {
        console.log("form not valid")
    }
    registerForm.classList.add("was-validated")

   
    
   
}

console.log("Hello World")
