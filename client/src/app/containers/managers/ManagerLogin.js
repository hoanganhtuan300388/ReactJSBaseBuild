import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import component from "../../components/managers/ManagerLogin";
import { loginUser } from "../../actions/AuthActions";
import { flash } from "../../actions/FlashActions";
import { validate } from "../../validations/ManagerLoginValidations";

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = {
    loginUser: loginUser,
    flash: flash
};

const form = reduxForm({ form: "ManagerLoginForm", validate })(component);
export default connect(mapStateToProps, mapDispatchToProps)(form);