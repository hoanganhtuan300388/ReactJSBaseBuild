import { connect } from "react-redux";

import component from "../../components/commons/Navbar";
import { logoutUser } from "../../actions/AuthActions";

const mapStateToProps = (state) => {
    return {
       auth: state.auth
    };
};

const mapDispatchToProps = {
    logoutUser: logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(component);