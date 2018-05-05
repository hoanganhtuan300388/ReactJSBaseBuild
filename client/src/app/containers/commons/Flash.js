import { connect } from "react-redux";

import component from "../../components/commons/Flash";
import { closeFlash } from "../../actions/FlashActions";

const mapStateToProps = (state) => {
    return {
       messages: state.flash
    };
};

const mapDispatchToProps = {
    closeFlash: closeFlash
};

export default connect(mapStateToProps, mapDispatchToProps)(component);