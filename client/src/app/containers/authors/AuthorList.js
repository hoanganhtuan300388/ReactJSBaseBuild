import { connect } from "react-redux";

import component from "../../components/authors/AuthorList";
import { getAuthors, deleteAuthor } from "../../actions/AuthorActions";
import { flash } from "../../actions/FlashActions";

const mapStateToProps = (state) => {
    return {
        author: state.author
    };
};

const mapDispatchToProps = {
    getAuthors: getAuthors,
    deleteAuthor: deleteAuthor,
    flash: flash
};

export default connect(mapStateToProps, mapDispatchToProps)(component);