import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import component from "../../components/books/BookAddEdit";
import { createBook, getBook, editBook } from "../../actions/BookActions";
import { getComboboxCategories } from "../../actions/CategoryActions";
import { getComboboxAuthors } from "../../actions/AuthorActions";
import { flash } from "../../actions/FlashActions";
import { validate } from "../../validations/BookAddEditValidations";

const mapStateToProps = (state) => {
    return {
        book: state.book,
        category: state.category,
        author: state.author
    };
};

const mapDispatchToProps = {
    createBook: createBook,
    getBook: getBook,
    editBook: editBook,
    getComboboxCategories: getComboboxCategories,
    getComboboxAuthors: getComboboxAuthors,
    flash: flash
};

const form = reduxForm({ form: "BookAddEditForm", validate, initialValues: { category: [], tag: [] } })(component);
export default connect(mapStateToProps, mapDispatchToProps)(form);