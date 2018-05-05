import { isImage } from "./CommonValidations";

export const validate = values => {
    const errors = {}
   
    if (!values.name) {
        errors.name = "Tên loại truyện không được để trống";
    }

    if(values.image) {
        if(values.image[0] && !isImage(values.image[0])) {
            errors.image = "Phải chọn 1 file ảnh";    
        }
    }

    return errors
}