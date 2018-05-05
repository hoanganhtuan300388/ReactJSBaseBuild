import { connect } from "react-redux";

import component from "../../components/categories/CategoryList";
import { getCategories, deleteCategory } from "../../actions/CategoryActions";
import { flash } from "../../actions/FlashActions";

const mapStateToProps = (state) => {
    return {
        category: state.category
    };
};

const mapDispatchToProps = {
    getCategories: getCategories,
    deleteCategory: deleteCategory,
    flash: flash
};

export default connect(mapStateToProps, mapDispatchToProps)(component);