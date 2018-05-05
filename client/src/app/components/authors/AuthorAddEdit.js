import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { Field, SubmissionError } from "redux-form";

import { TextField, FileField, TextareaField, DatePickerField } from "../commons/Field";
import { datepicker } from "../commons/Jquery";

class AuthorAddEdit extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: false
        };
    }

    componentDidMount() {
        this.__initLoadJquery();
        this.__initLoadData();
    }

    __initLoadJquery() {
        datepicker();
    }

    __initLoadData() {
        let id = this.props.match.params.id;
        if (id) {
            this.setState({
                isEdit: true
            });

            this.props.getAuthor(id).then(() => {
                if (this.props.author.status === 1) {
                    this.props.initialize(this.props.author.data);
                } else {
                    this.props.flash(this.props.author.message, "error");
                    this.props.history.push("/author/index");
                }
            });
        } else {
            this.props.initialize({
                gender: "1"
            });    
        }
    }

    onSubmit(data) {
        return new Promise((resolve, reject) => {
            const process = () => {
                if (this.props.author.status === 1) {
                    resolve(this.props.author.status);
                    this.props.flash(this.props.author.message, "success");
                    this.props.history.push("/author/index");
                } else {
                    Object.keys(this.props.author.errors).map((field) => {
                        let error = {};
                        error[field] = this.props.author.errors[field][0];
                        let submissionError = new SubmissionError(error)
                        reject(submissionError);
                    });
                }
            };

            if(this.state.isEdit === false) {
                this.props.createAuthor(data).then(process);
            } else {
                this.props.editAuthor(this.props.match.params.id, data).then(process);
            }
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
                                {this.state.isEdit == false ? "Thêm Mới Tác Giả" : "Sửa Thông Tin Tác Giả"}
                            </h3>
                        </div>
                        <div className="col col-md-3 text-right">
                            <Link to={"/author/index"} className="btn btn-default btn-create">
                                <span className="glyphicon glyphicon-arrow-left"></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))} encType="multipart/form-data">
                        <Field name="name" component={TextField} label="Tên Tác Giả" type="text" empty={true} />
                        <Field name="image" component={FileField} label="Hình Ảnh" value={null} empty={false} />
                        <Field name="birthday" component={DatePickerField} label="Ngày Sinh" type="text" empty={false} />
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
                        <Field name="website" component={TextField} label="Website" type="text" empty={false} />
                        <Field name="email" component={TextField} label="Email" type="text" empty={false} />
                        <Field name="description" component={TextareaField} label="Mô Tả" empty={false} />
                        <div className="form-actions">
                            <div className="row">
                                <div className="col-md-offset-3 col-md-9">
                                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                                        <i className="fa fa-check"></i> {this.state.isEdit == false ? "Thêm Mới" : "Sửa Lại"}
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

export default AuthorAddEdit;