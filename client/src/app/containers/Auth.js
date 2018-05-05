import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

import { setRedirectTo } from "../actions/AuthActions";

export default function requireAuth(Component) {
    class Auth extends Component {

        componentWillMount() {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth(isAuthenticated) {
            if (!isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                this.props.setRedirectTo(redirectAfterLogin);
                this.props.history.push('/auth/login');
            }
        }

        render() {
            return (
                <div>
                    {
                        this.props.isAuthenticated === true
                            ? <Component {...this.props} />
                            : null
                    }
                </div>
            )
        }

    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated
    });

    return connect(mapStateToProps, { setRedirectTo: setRedirectTo })(Auth);
}