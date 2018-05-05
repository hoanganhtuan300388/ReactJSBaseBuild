import React, { Component } from "react";

class Sort extends Component {

    render() {
        const { field, text, sort } = this.props;

        if(sort.sort === field) {
            if(sort.direction === "asc") {
                return (
                    <div className="sortable asc" onClick={() => this.props.sortData(field, "desc")}>
                        {text}
                    </div>
                );
            } else {
                return (
                    <div className="sortable desc" onClick={() => this.props.sortData(field, "asc")}>
                        {text}
                    </div>
                );
            }
        } else {
            return (
                <div className="sortable both" onClick={() => this.props.sortData(field, "desc")}>
                    {text}
                </div>
            );
        }
    }
}

export default Sort;