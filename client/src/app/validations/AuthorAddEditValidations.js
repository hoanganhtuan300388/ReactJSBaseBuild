import { isDate, isImage } from "./CommonValidations";

export const validate = values => {
    const errors = {}
   
    if (!values.name) {
        errors.name = "Tên tác giả không được để trống";
    }

    if(values.image) {
        if(values.image[0] && !isImage(values.image[0])) {
            errors.image = "Phải chọn 1 file ảnh";    
        }
    }

    if (values.birthday && !isDate(values.birthday)) {
        errors.birthday = "Ngày sinh không đúng định dạng (yyyy-mm-dd)";
    }

    if(values.website && !/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(values.website)) {
        errors.website = "Địa chỉ url không đúng định dạng";
    }

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Email không đúng định dạng";
    }

    return errors
}