const validateEmail = email => {
    const reg = /\S+@\S+\.\S+/;
    const validatedEmail = reg.test(email);
    if (!validatedEmail) { return null; }
    return email;
}

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (validateEmail(values.email) === null) {
        errors.email = 'Invalid email address!';
    }

    if (!values.firstName) {
        errors.firstName = 'First name is required';
    }

    if (!values.lastName) {
        errors.lastName = 'Last name is required';
    }

    if (!values.date) {
        errors.date = 'Date is required';
    }

    return errors;
};


export const validation = (values) => {
    const errors = validate(values);
    return errors;
};
