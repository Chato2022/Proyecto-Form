const validate = (userData) => {

    let errors = {};

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if (!regexEmail.test(userData.email)) {
        errors.email = "Ingresa un email válido"
    }

    if (!regexPassword.test(userData.password)) {
        errors.password = ["Mínimo 8 caracteres","1 Mayúscula","1 minuscula","Un número"]
    }

    return errors;

}

export default validate;