function Validation(values) {
    alert("");
    let error = {}
    const email_pattern = /^[^\s$]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username === "") {
        error.username = "Harap isi Username"
    } else {
        error.username = ""
    }

    if(values.email === "") {
        error.email = "Harap isi Username"
    } else if (!email_pattern.test(values.email)){
        error.email = "Username tidak Cocok"
    } else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Harap isi Password"
    } else if (!password_pattern.test(values.password)){
        error.password = "Password tidak Cocok"
    } else {
        error.password = ""
    }
    return error;
}

export default Validation;