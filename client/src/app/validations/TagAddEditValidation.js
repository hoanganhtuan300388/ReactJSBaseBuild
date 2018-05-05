export const validate = values => {
    const errors = {}
   
    if (!values.name) {
        errors.name = "Từ khóa không được để trống";
    }

    return errors
}