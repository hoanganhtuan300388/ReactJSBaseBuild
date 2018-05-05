import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
    onLogout() {
        this.props.logoutUser();
    }

    render() {
        const { id, email, first_name, last_name, display_name } = this.props.auth.user;

        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to={"/"} className="navbar-brand">
                            ReactJS Redux Core Build 1.0
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to={"/"} activeClassName="active">Trang Chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/manager/index"} activeClassName="active">Quản Trị</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/book/index"} activeClassName="active">Truyện</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/category/index"} activeClassName="active">Loại Truyện</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/tag/index"} activeClassName="active">Từ Khóa</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/author/index"} activeClassName="active">Tác Giả</NavLink>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">
                                    <span className="glyphicon glyphicon-user"></span>
                                    &nbsp;
                                    <strong>{display_name}</strong>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="navbar-login">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <p className="text-center">
                                                        <span className="glyphicon glyphicon-user icon-size"></span>
                                                    </p>
                                                </div>
                                                <div className="col-lg-8">
                                                    <p className="text-left">
                                                        <strong>
                                                            {`${first_name} ${last_name}`}
                                                        </strong>
                                                    </p>
                                                    <p className="text-left small">
                                                        {email}
                                                    </p>
                                                    <p className="text-left">
                                                        <Link to={`/manager/edit/${id}`} className="btn btn-primary btn-block btn-sm">
                                                            Sửa Thông Tin
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <div className="navbar-login navbar-login-session">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <p>
                                                        <a onClick={this.onLogout.bind(this)} className="btn btn-danger btn-block">
                                                            Đăng Xuất
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;