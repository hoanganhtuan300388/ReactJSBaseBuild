import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import component from "../../components/authors/AuthorAddEdit";
import { createAuthor, getAuthor, editAuthor } from "../../actions/AuthorActions";
import { flash } from "../../actions/FlashActions";
import { validate } from "../../validations/AuthorAddEditValidations";

const mapStateToProps = (state) => {
    return {
        author: state.author
    };
};

const mapDispatchToProps = {
    createAuthor: createAuthor,
    getAuthor: getAuthor,
    editAuthor: editAuthor,
    flash: flash
};

const form = reduxForm({ form: "AuthorAddEditForm", validate })(component);
export default connect(mapStateToProps, mapDispatchToProps)(form);