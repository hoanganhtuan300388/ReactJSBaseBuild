import { connect } from "react-redux";

import component from "../../components/tags/TagList";
import { getTags, deleteTag } from "../../actions/TagActions";
import { flash } from "../../actions/FlashActions";

const mapStateToProps = (state) => {
    return {
        tag: state.tag
    };
};

const mapDispatchToProps = {
    getTags: getTags,
    deleteTag: deleteTag,
    flash: flash
};

export default connect(mapStateToProps, mapDispatchToProps)(component);