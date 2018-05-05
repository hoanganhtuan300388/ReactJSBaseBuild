import { connect } from "react-redux";

import component from "../../components/managers/ManagerList";
import { getManagers, deleteManager } from "../../actions/ManagerActions";
import { flash } from "../../actions/FlashActions";

const mapStateToProps = (state) => {
    return {
        manager: state.manager,
    };
};

const mapDispatchToProps = {
    getManagers: getManagers,
    deleteManager: deleteManager,
    flash: flash
};

export default connect(mapStateToProps, mapDispatchToProps)(component);