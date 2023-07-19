export const validateUsername = (username, setErrorState) => {
    if ((username.trim()).length > 0) {
        setErrorState('');
        return true;
    } else {
        setErrorState("First name is required");
        return false;
    }
}
export const validateEmail = (email, setErrorState) => {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ((email.trim()).length > 0) {
        if (email.match(validEmail)) {
            setErrorState('');
            return true;
        } else {
            setErrorState('The email is invalid');
            return false;
        }
    } else {
        setErrorState("Email is required");
        return false;
    }
}

export const validatePassword = (password, setErrorState) => {
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if ((password.trim()).length > 0) {
        if (password.match(validPassword)) {
            setErrorState('');
            return true;
        } else {
            setErrorState('You password is weak');
            return false;
        }
    } else {
        setErrorState("Password is required");
        return false;
    }
}