import { connect } from "react-redux";

import component from "../../components/books/BookList";
import { getBooks, deleteBook } from "../../actions/BookActions";
import { flash } from "../../actions/FlashActions";

const mapStateToProps = (state) => {
    return {
        book: state.book
    };
};

const mapDispatchToProps = {
    getBooks: getBooks,
    deleteBook: deleteBook,
    flash: flash
};

export default connect(mapStateToProps, mapDispatchToProps)(component);