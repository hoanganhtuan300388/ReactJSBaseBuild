import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

import Pagination from "../commons/Pagination";
import Search from "../commons/Search";
import List from "../commons/List";

class ManagerList extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            sort: "id",
            direction: "desc",
            limit: 10
        }
    }

    componentDidMount() {
        this.props.getManagers(this.state);
    }

    onFetchData(params) {
        let newState = Object.assign(this.state, params);
        this.setState(newState);
        this.props.getManagers(newState);
    }

    onDelete(id) {
        const c = confirm("Bạn chắc chắn muốn xóa quản trị này?");
        if (c) {
            this.props.deleteManager(id).then(() => {
                this.props.getManagers(this.state);
            });
        }
    }

    render() {
        const state = this.state;
        const { items, paging, sort } = this.props.manager.data;
        const headers = { id: "ID", email: "Email", first_name: "Họ", last_name: "Tên", display_name: "Tên Hiển Thị" };

        return (
            <div className="panel panel-primary panel-table">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col col-md-9">
                            <h3 className="panel-title">
                                Danh Sách Quản Trị
                            </h3>
                        </div>
                        <div className="col col-md-3 text-right">
                            <Link to={"/manager/add"} className="btn btn-default btn-create">
                                <span className="glyphicon glyphicon-plus"></span>
                                Thêm Mới
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <Search
                        limit={paging ? paging.limit : 10}
                        search={(data) => this.onFetchData({ page: 1, search_keyword: data.search_keyword })}
                        changeLimit={(limit) => this.onFetchData({ page: 1, limit: limit })}
                    />
                    {
                        items ? 
                            <List 
                                items={items} 
                                headers={headers}
                                sort={sort}
                                onSort={this.onFetchData.bind(this)} 
                                onDelete={this.onDelete.bind(this)} 
                            /> 
                            : ''
                    }
                </div>
                <div className="panel-footer">
                    <Pagination
                        changePage={(numberPage) => this.onFetchData({ page: numberPage })}
                        paging={paging ? paging : {}}
                    />
                </div>
            </div>
        );
    }
}

export default ManagerList;