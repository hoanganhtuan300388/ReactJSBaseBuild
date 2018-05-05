import { isDate } from "./CommonValidations";

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

    if (!values.confirm_password) {
        errors.confirm_password = "Mật khẩu nhập lại không được để trống";
    } else if(values.password && (values.confirm_password !== values.password)) {
        errors.confirm_password = "Mật khẩu nhập lại phải giống mật khẩu";
    }

    if (!values.first_name) {
        errors.first_name = "Họ không được để trống";
    }

    if (!values.last_name) {
        errors.last_name = "Tên không được để trống";
    }

    if (!values.display_name) {
        errors.display_name = "Tên hiển thị không được để trống";
    }

    if (!values.birthday) {
        errors.birthday = "Ngày sinh không được để trống";
    } else if(!isDate(values.birthday)) {
        errors.birthday = "Ngày sinh không đúng định dạng (yyyy-mm-dd)";    
    }

    if (!values.gender) {
        errors.gender = "Giới tính phải chọn";
    }

    return errors
}