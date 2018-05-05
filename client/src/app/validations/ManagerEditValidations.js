import { isDate } from "./CommonValidations";

export const validate = values => {
    const errors = {}
    
    console.log(values);

    if (!values.email) {
        errors.email = "Email không được để trống";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Email không đúng định dạng";
    }

    if (values.old_password && !values.new_password) {
        errors.new_password = "Mật khẩu mới không được để trống";
    }

    if (values.old_password && !values.confirm_new_password) {
        errors.confirm_new_password = "Mật khẩu nhập lại không được để trống";
    } else if(values.old_password && values.new_password && (values.confirm_new_password !== values.new_password)) {
        errors.confirm_new_password = "Mật khẩu nhập lại phải giống mật khẩu";
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