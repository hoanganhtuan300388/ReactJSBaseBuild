import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { Field, SubmissionError } from "redux-form";

import { TextField, FileField, TextareaField } from "../commons/Field";

class TagAddEdit extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: false
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        if (id) {
            this.setState({
                isEdit: true
            });

            this.props.getTag(id).then(() => {
                if (this.props.tag.status === 1) {
                    this.props.initialize(this.props.tag.data);
                } else {
                    this.props.flash(this.props.tag.message, "error");
                    this.props.history.push("/tag/index");
                }
            });
        }
    }

    onSubmit(data) {
        return new Promise((resolve, reject) => {
            const process = () => {
                if (this.props.tag.status === 1) {
                    resolve(this.props.tag.status);
                    this.props.flash(this.props.tag.message, "success");
                    this.props.history.push("/tag/index");
                } else {
                    Object.keys(this.props.tag.errors).map((field) => {
                        let error = {};
                        error[field] = this.props.tag.errors[field][0];
                        let submissionError = new SubmissionError(error)
                        reject(submissionError);
                    });
                }
            };

            if (this.state.isEdit === false) {
                this.props.createTag(data).then(process);
            } else {
                this.props.editTag(this.props.match.params.id, data).then(process);
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
                                {this.state.isEdit == false ? "Thêm Mới Từ Khóa" : "Sửa Thông Tin Từ Khóa"}
                            </h3>
                        </div>
                        <div className="col col-md-3 text-right">
                            <Link to={"/tag/index"} className="btn btn-default btn-create">
                                <span className="glyphicon glyphicon-arrow-left"></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="name" component={TextField} label="Từ Khóa" type="text" empty={true} />
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

export default TagAddEdit;