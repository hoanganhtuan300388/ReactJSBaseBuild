import { isImage } from "./CommonValidations";

export const validate = values => {
    const errors = {}
   
    if (!values.title) {
        errors.title = "Tiêu đề truyện không được để trống";
    }

    if (!values.excerpt) {
        errors.excerpt = "Nội dung sơ lược không được để trống";
    }

    if (!values.content) {
        errors.content = "Nội dung không được để trống";
    }

    if(values.image) {
        if(values.image[0] && !isImage(values.image[0])) {
            errors.image = "Phải chọn 1 file ảnh";    
        }
    }

    if (!values.category) {
        errors.category = "Loại truyện phải chọn 1";
    }

    if (!values.status) {
        errors.status = "Trạng thái phải chọn 1";
    }

    return errors
}