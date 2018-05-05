import React, { Component } from "react";
import classnames from "classnames";

class Flash extends Component {
    onCloseFlash(id) {
        this.props.closeFlash(id);
    }

    render() {
        const messages = this.props.messages.map((flash) => {
            const { id, message, type } = flash;

            return (
                <div key={id} className={classnames("alert", {
                    "alert-success": type === "success",
                    "alert-danger": type === "error"
                })}>
                    {message}
                    <button onClick={() => this.onCloseFlash(id)} className="close">
                        <span>&times;</span>
                    </button>
                </div>
            );
        });

        return (
            <div>{messages}</div>
        );
    }
}

export default Flash;