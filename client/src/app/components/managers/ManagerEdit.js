import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { Field, SubmissionError } from "redux-form";

import { TextField, RadioField, TextareaField, DatePickerField } from "../commons/Field";
import { datepicker } from "../commons/Jquery";

class ManagerEdit extends Component {
    componentDidMount() {
        this.__initLoadJquery();
        this.__initLoadData();
    }

    __initLoadJquery() {
        datepicker();
    }

    __initLoadData() {
        let id = this.props.match.params.id;
        this.props.getManager(id).then((response) => {
            if (this.props.manager.status === 1) {
                this.props.initialize(this.props.manager.data);
            } else {
                this.props.flash(this.props.manager.message, "error");
                this.props.history.push("/manager/index");
            }
        });
    }

    onSubmit(data) {
        return new Promise((resolve, reject) => {
            this.props.editManager(this.props.match.params.id, data).then(() => {
                if (this.props.manager.status === 1) {
                    resolve(this.props.manager.status);
                    this.props.flash(this.props.manager.message, "success");
                    this.props.history.push("/manager/index");
                } else {
                    Object.keys(this.props.manager.errors).map((field) => {
                        let error = {};
                        error[field] = this.props.manager.errors[field][0];
                        let submissionError = new SubmissionError(error)
                        reject(submissionError);
                    });
                }
            })
        });
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div className="panel panel-primary panel-table">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col col-md-9">
                            <h3 className="panel-title">
                                Sửa Quản Trị
                            </h3>
                        </div>
                        <div className="col col-md-3 text-right">
                            <Link to={"/manager/index"} className="btn btn-default btn-create">
                                <span className="glyphicon glyphicon-arrow-left"></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="email" component={TextField} label="Địa Chỉ Email" type="text" empty={true} />
                        <Field name="old_password" component={TextField} label="Mật Khẩu Cũ" type="password" empty={false} />
                        <Field name="new_password" component={TextField} label="Mật Khẩu Mới" type="password" empty={false} />
                        <Field name="confirm_new_password" component={TextField} label="Nhập Lại" type="password" empty={false} />
                        <Field name="first_name" component={TextField} label="Họ" type="text" empty={true} />
                        <Field name="last_name" component={TextField} label="Tên" type="text" empty={true} />
                        <Field name="display_name" component={TextField} label="Tên Hiển Thị" type="text" empty={true} />
                        <Field name="birthday" component={DatePickerField} label="Ngày Sinh" type="text" empty={true} />
                        <div className="form-group">
                            <label className="col-md-3 control-label">
                                Giới Tính
                            </label>
                            <div className="col-md-4">
                                <label className="radio-inline">
                                    <Field name="gender" component="input" type="radio" value="1" /> Nam
                                </label>
                                <label className="radio-inline">
                                    <Field name="gender" component="input" type="radio" value="0" /> Nữ
                                </label>
                            </div>
                        </div>
                        <Field name="description" component={TextareaField} label="Thông Tin Bổ Sung" empty={false} />
                        <div className="form-actions">
                            <div className="row">
                                <div className="col-md-offset-3 col-md-9">
                                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                                        <i className="fa fa-check"></i> Sửa Lại
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-default" type="button" disabled={pristine || submitting} onClick={reset}>
                                        Hủy Bỏ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ManagerEdit;