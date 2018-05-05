import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import { Field, SubmissionError } from "redux-form";

import { TextField, FileField, TextareaField, DatePickerField, ComboboxField, ComboboxMultipleField, TagField } from "../commons/Field";
import { datepicker, selectpicker } from "../commons/Jquery";

class BookAddEdit extends Component {
    constructor() {
        super();
        this.state = {
            isEdit: false,
            categories: {},
            authors: {}
        };
    }

    componentDidMount() {
        this.__initLoadJquery();
        this.__initLoadData();
    }

    __initLoadJquery() {
    }

    __initLoadData() {
        this.props.getComboboxCategories().then(() => {
            if (this.props.category.status === 1) {
                this.setState({
                    ...this.state,
                    categories: this.props.category.data
                });
            } else {
                this.props.flash(this.props.category.message, "error");
            }
            selectpicker();
        });

        this.props.getComboboxAuthors().then(() => {
            if (this.props.author.status === 1) {
                this.setState({
                    ...this.state,
                    authors: this.props.author.data
                });
            } else {
                this.props.flash(this.props.author.message, "error");
            }
        });

        let id = this.props.match.params.id;
        
        if (id) {
            this.setState({
                isEdit: true
            });

            this.props.getBook(id).then(() => {
                if (this.props.book.status === 1) {
                    this.props.initialize(this.props.book.data);
                } else {
                    this.props.flash(this.props.book.message, "error");
                    this.props.history.push("/book/index");
                }
            });
        }
    }

    onSubmit(data) {
        return new Promise((resolve, reject) => {
            const process = () => {
                if (this.props.book.status === 1) {
                    resolve(this.props.book.status);
                    this.props.flash(this.props.book.message, "success");
                    this.props.history.push("/book/index");
                } else {
                    Object.keys(this.props.book.errors).map((field) => {
                        let error = {};
                        error[field] = this.props.book.errors[field][0];
                        let submissionError = new SubmissionError(error)
                        reject(submissionError);
                    });
                }
            };

            if (this.state.isEdit === false) {
                this.props.createBook(data).then(process);
            } else {
                this.props.editBook(this.props.match.params.id, data).then(process);
            }
        });
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        let statuses = { "draft": "Bản nháp", "continue": "Còn tiếp", "complete": "Kết thúc" };

        return (
            <div className="panel panel-primary panel-table">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col col-md-9">
                            <h3 className="panel-title">
                                {this.state.isEdit == false ? "Thêm Mới Truyện" : "Sửa Thông Tin Truyện"}
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
                        <Field name="title" component={TextField} label="Tiêu Đề" type="text" empty={true} />
                        <Field name="excerpt" component={TextareaField} label="Sơ Lược" empty={true} />
                        <Field name="content" component={TextareaField} label="Nội Dung" empty={true} />
                        <Field name="found" component={TextField} label="Nguồn Truyện" type="text" empty={false} />
                        <Field name="image1" component={FileField} label="Hình Ảnh" value={null} empty={false} />
                        <Field name="tag" component={TagField} label="Từ Khóa" type="text" empty={false} />
                        <Field name="category" component={ComboboxMultipleField} options={this.state.categories} label="Loại Truyện" type="text" empty={true} />
                        <Field name="author" component={ComboboxField} options={this.state.authors} label="Tác Giả" type="text" empty={false} />
                        <Field name="release_year" component={DatePickerField} label="Năm Xuất Bản" type="text" empty={false} />
                        <Field name="status" component={ComboboxField} options={statuses} label="Trạng Thái" type="text" empty={true} />
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

export default BookAddEdit;