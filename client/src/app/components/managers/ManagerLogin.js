import React, { Component, PropTypes } from "react";
import { Field, SubmissionError } from "redux-form";

import { TextFieldLogin } from "../commons/Field";
import Flash from "../../containers/commons/Flash";

class ManagerLogin extends Component {
    onSubmit(props) {
        return new Promise((resolve, reject) => {
            this.props.loginUser(props).then(() => {
                if (this.props.auth.status === 1) {
                    this.props.history.push(this.props.auth.redirectTo);
                    resolve(this.props.auth.status);
                } else {
                    let submissionError = new SubmissionError({ _error: this.props.auth.message });
                    reject(submissionError);
                    this.props.flash(this.props.auth.message, "error");
                }
            })
        });
    }

    render() {
        const { error, handleSubmit, submitting } = this.props;

        return (
            <div className="row">
                <div className="col-md-5 centered">
                    <div className="jumbotron">
                        <h2 className="text-center">Đăng Nhập Quản Trị</h2>
                        <br />
                        <Flash />
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field component={TextFieldLogin} name="email" type="textbox" label="Địa Chỉ Email" />
                            <Field component={TextFieldLogin} name="password" type="password" label="Mật Khẩu" />
                            <div className="checkbox">
                                <label>
                                    <Field component="input" name="remember" type="checkbox" /> Ghi nhớ mật khẩu
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={submitting}>
                                Đăng Nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default ManagerLogin;