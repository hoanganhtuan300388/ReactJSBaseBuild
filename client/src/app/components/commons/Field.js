import React from "react";
import { Field } from "redux-form";
import classnames from "classnames";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import DateTimeField from "react-bootstrap-datetimepicker";

export const TextField = ({ input, label, type, empty, meta: { touched, error, warning } }) => (
    <div className={classnames("form-group", { "has-warning": touched && error })}>
        <label className="col-md-3 control-label">
            {label}
            {empty === true ? <span className="required"> * </span> : ''}
        </label>
        <div className="col-md-4">
            <input {...input} type={type} className="form-control" />
            {touched && ((error && <p className="help-block">{error}</p>) || (warning && <p className="help-block">{warning}</p>))}
        </div>
    </div>
);

export const TextareaField = ({ input, label, empty, meta: { touched, error, warning } }) => (
    <div className={classnames("form-group", { "has-warning": touched && error })}>
        <label className="col-md-3 control-label">
            {label}
            {empty === true ? <span className="required"> * </span> : ''}
        </label>
        <div className="col-md-4">
            <textarea {...input} className="form-control"></textarea>
            {touched && ((error && <p className="help-block">{error}</p>) || (warning && <p className="help-block">{warning}</p>))}
        </div>
    </div>
);

export const TagField = ({ input, label, type, empty, meta: { touched, error, warning } }) => (
    <div className={classnames("form-group", { "has-warning": touched && error })}>
        <label className="col-md-3 control-label">
            {label}
            {empty === true ? <span className="required"> * </span> : ''}
        </label>
        <div className="col-md-4">
            <TagsInput {...input} />
            {touched && ((error && <p className="help-block">{error}</p>) || (warning && <p className="help-block">{warning}</p>))}
        </div>
    </div>
);

export const FileField = ({ input, label, empty, value, meta: { touched, error, warning } }) => (
    <div className={classnames("form-group", { "has-warning": touched && error })}>
        <label className="col-md-3 control-label">
            {label}
            {empty === true ? <span className="required"> * </span> : ''}
        </label>
        <div className="col-md-4">
            <input {...input} type="file" value={value} />
            {touched && ((error && <p className="help-block">{error}</p>) || (warning && <p className="help-block">{warning}</p>))}
        </div>
    </div>
);

export const DatePickerField = ({ input, label, empty, meta: { touched, error, warning } }) => (
    <div className={classnames("form-group", { "has-warning": touched && error })}>
        <label className="col-md-3 control-label">
            {label}
            {empty === true ? <span className="required"> * </span> : ''}
        </label>
        <div className="col-md-4">
            <DateTimeField {...input} inputFormat={"YYYY/MM/DD"} />
            {touched && ((error && <p className="help-block">{error}</p>) || (warning && <p className="help-block">{warning}</p>))}
        </div>
    </div>
);

export const ComboboxField = ({ input, label, type, empty, options, meta: { touched, error, warning }, children }) => (
    <div className={classnames("form-group", { "has-warning": touched && error })}>
        <label className="col-md-3 control-label">
            {label}
            {empty === true ? <span className="required"> * </span> : ''}
        </label>
        <div className="col-md-4">
            <select {...input} className="form-control">
                <option value="">{`Chọn ${label}`}</option>
                {
                    options ? Object.keys(options).map((id) => {
                        return (<option key={id} value={id}>{options[id]}</option>)
                    }) : ""
                }
            </select>
            {touched && ((error && <p className="help-block">{error}</p>) || (warning && <p className="help-block">{warning}</p>))}
        </div>
    </div>
);

export const ComboboxMultipleField = ({ input, label, type, empty, options, meta: { touched, error, warning }, children }) => (
    <div className={classnames("form-group", { "has-warning": touched && error })}>
        <label className="col-md-3 control-label">
            {label}
            {empty === true ? <span className="required"> * </span> : ''}
        </label>
        <div className="col-md-4">
            <select {...input} className="form-control selectpk" title={`Chọn ${label}`} data-live-search="true" multiple={true}>
                {
                    options ? Object.keys(options).map((id) => {
                        return (<option key={id} value={id}>{options[id]}</option>)
                    }) : ""
                }
            </select>
            {touched && ((error && <p className="help-block">{error}</p>) || (warning && <p className="help-block">{warning}</p>))}
        </div>
    </div>
);

export const RadioField = ({ input, label, options, empty, checkvalue, meta: { touched, error, warning } }) => (
    <div className={touched && error ? "form-group has-warning" : "form-group"}>
        <label className="col-md-3 control-label">
            {label}
            {empty === true ? <span className="required"> * </span> : ''}
        </label>
        <div className="col-md-4">
            {
                options.map((option, index) => {
                    return (
                        <label className="radio-inline" key={option.value}>
                            <input {...input} type="radio" value={option.value} /> {option.text}
                        </label>
                    );
                })
            }
            {touched && ((error && <p className="help-block">{error}</p>) || (warning && <p className="help-block">{warning}</p>))}
        </div>
    </div>
);

export const TextFieldLogin = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={classnames("form-group", { "has-warning": touched && error })}>
        <input {...input} type={type} className="form-control input-lg" placeholder={label} />
        {touched && ((error && <p className="help-block">{error}</p>) || (warning && <p className="help-block">{warning}</p>))}
    </div>
);