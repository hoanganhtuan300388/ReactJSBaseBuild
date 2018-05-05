export const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = "Email không được để trống";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Email không đúng định dạng";
    }

    if (!values.password) {
        errors.password = "Mật khẩu không được để trống";
    }

    return errors;
}