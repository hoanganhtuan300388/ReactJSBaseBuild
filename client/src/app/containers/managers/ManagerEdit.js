import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import component from "../../components/managers/ManagerEdit";
import { getManager, editManager } from "../../actions/ManagerActions";
import { flash } from "../../actions/FlashActions";
import { validate } from "../../validations/ManagerEditValidations";

const mapStateToProps = (state) => {
    return {
        manager: state.manager
    };
};

const mapDispatchToProps = {
    getManager: getManager,
    editManager: editManager,
    flash: flash
};

const form = reduxForm({ form: "ManagerEditForm", validate })(component);
export default connect(mapStateToProps, mapDispatchToProps)(form);