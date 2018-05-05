import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import component from "../../components/categories/CategoryAddEdit";
import { createCategory, getCategory, editCategory } from "../../actions/CategoryActions";
import { flash } from "../../actions/FlashActions";
import { validate } from "../../validations/CategoryAddEditValidations";

const mapStateToProps = (state) => {
    return {
        category: state.category
    };
};

const mapDispatchToProps = {
    createCategory: createCategory,
    getCategory: getCategory,
    editCategory: editCategory,
    flash: flash
};

const form = reduxForm({ form: "CategoryAddEditForm", validate })(component);
export default connect(mapStateToProps, mapDispatchToProps)(form);