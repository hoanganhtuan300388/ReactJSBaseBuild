import React, { Component } from "react";

import Navbar from "../../containers/commons/Navbar";
import Footer from "../commons/Footer";
import Flash from "../../containers/commons/Flash";

class Default extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Flash />
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.children}
                        </div>
                    </div>
                    <hr />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Default;