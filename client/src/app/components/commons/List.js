import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

import Sort from "../commons/Sort";

class List extends Component {
    render() {
        const { items, headers, sort, onSort, onDelete } = this.props;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <td width="150px"></td>
                                    {
                                        Object.keys(headers).map((field) => {
                                            return (
                                                <td key={field}>
                                                    <Sort
                                                        sortData={(sort, derec) => onSort({ sort: sort, direction: derec })}
                                                        sort={sort}
                                                        text={headers[field]}
                                                        field={field}
                                                    />
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.length > 0 ?
                                        items.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>
                                                        <div className="btn-group" role="group">
                                                            <Link className="btn btn-sm btn-primary" to={"view/" + item.id}>
                                                                <span className="glyphicon glyphicon-search"></span>
                                                            </Link>
                                                            <Link className="btn btn-sm btn-primary" to={"edit/" + item.id}>
                                                                <span className="glyphicon glyphicon-pencil"></span>
                                                            </Link>
                                                            <a className="btn btn-sm btn-primary" onClick={() => onDelete(item.id)}>
                                                                <span className="glyphicon glyphicon-remove"></span>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    {
                                                        Object.keys(headers).map((field) => {
                                                            return (
                                                                <td key={field}>{item[field]}</td>
                                                            );
                                                        })
                                                    }
                                                </tr>
                                            );
                                        })
                                        : (
                                            <tr>
                                                <td colSpan={Object.keys(headers).length + 1} className="text-center">
                                                    Không tìm thấy bản ghi nào
                                                </td>
                                            </tr>
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};

export default List;