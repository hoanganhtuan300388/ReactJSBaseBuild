import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import component from "../../components/tags/TagAddEdit";
import { createTag, getTag, editTag } from "../../actions/TagActions";
import { flash } from "../../actions/FlashActions";
import { validate } from "../../validations/TagAddEditValidation";

const mapStateToProps = (state) => {
    return {
        tag: state.tag
    };
};

const mapDispatchToProps = {
    createTag: createTag,
    getTag: getTag,
    editTag: editTag,
    flash: flash
};

const form = reduxForm({ form: "TagAddEditForm", validate })(component);
export default connect(mapStateToProps, mapDispatchToProps)(form);