import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import component from "../../components/managers/ManagerAdd";
import { createManager } from "../../actions/ManagerActions";
import { flash } from "../../actions/FlashActions";
import { validate } from "../../validations/ManagerAddValidations";

const mapStateToProps = (state) => {
    return {
        manager: state.manager
    };
};

const mapDispatchToProps = {
    createManager: createManager,
    flash: flash
};

const form = reduxForm({ form: "ManagerAddForm", validate })(component);
export default connect(mapStateToProps, mapDispatchToProps)(form);