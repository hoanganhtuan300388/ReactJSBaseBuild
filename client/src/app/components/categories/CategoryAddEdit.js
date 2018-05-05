import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { Field, SubmissionError } from "redux-form";

import { TextField, FileField, TextareaField } from "../commons/Field";

class CategoryAddEdit extends Component {
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

            this.props.getCategory(id).then(() => {
                if (this.props.category.status === 1) {
                    this.props.initialize(this.props.category.data);
                } else {
                    this.props.flash(this.props.category.message, "error");
                    this.props.history.push("/category/index");
                }
            });
        }
    }

    onSubmit(data) {
        return new Promise((resolve, reject) => {
            const process = () => {
                if (this.props.category.status === 1) {
                    resolve(this.props.category.status);
                    this.props.flash(this.props.category.message, "success");
                    this.props.history.push("/category/index");
                } else {
                    /*Object.keys(this.props.category.errors).map((field) => {
                        let error = {};
                        error[field] = this.props.category.errors[field][0];
                        let submissionError = new SubmissionError(error)
                        reject(submissionError);
                    });*/
                    alert(JSON.stringify(this.props.category.errors));
                }
            };

            if(this.state.isEdit === false) {
                this.props.createCategory(data).then(process);
            } else {
                this.props.editCategory(this.props.match.params.id, data).then(process);
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
                                {this.state.isEdit == false ? "Thêm Mới Loại Truyện" : "Sửa Thông Tin Loại Truyện"}
                            </h3>
                        </div>
                        <div className="col col-md-3 text-right">
                            <Link to={"/category/index"} className="btn btn-default btn-create">
                                <span className="glyphicon glyphicon-arrow-left"></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))} encType="multipart/form-data">
                        <Field name="player_name" component={TextField} label="player_name" type="text" empty={false} />
                        <Field name="email" component={TextField} label="email" type="text" empty={false} />
                        <Field name="email_confirm_code" component={TextField} label="email_confirm_code" type="text" empty={false} />
                        <Field name="password" component={TextField} label="password" type="text" empty={false} />
                        <Field name="sex" component={TextField} label="sex" type="text" empty={false} />
                        <Field name="birthday" component={TextField} label="birthday" type="text" empty={false} />
                        <Field name="height" component={TextField} label="height" type="text" empty={false} />
                        <Field name="weight" component={TextField} label="weight" type="text" empty={false} />
                        <Field name="right_left_hander" component={TextField} label="right_left_hander" type="text" empty={false} />
                        <Field name="profile_picture" component={FileField} label="profile_picture" value={null} empty={false} />
                        <Field name="facebook_id" component={TextField} label="facebook_id" type="text" empty={false} />
                        <Field name="twitter_id" component={TextField} label="twitter_id" type="text" empty={false} />
                        <Field name="target_score" component={TextField} label="target_score" type="text" empty={false} />
                        <Field name="distance_setting" component={TextField} label="distance_setting" type="text" empty={false} />
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

export default CategoryAddEdit;