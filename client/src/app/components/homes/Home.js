import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="row home-menu">
                <div className="col-xs-6 col-md-2">
                    <Link to={"/"} className="thumbnail text-center">
                        <br />
                        <i className="glyphicon glyphicon-home gi-5x"></i>
                        <h4 className="caption">Trang Chủ</h4>
                    </Link>
                </div>
                <div className="col-xs-6 col-md-2">
                    <Link to={"/manager/index"} className="thumbnail text-center">
                        <br />
                        <i className="glyphicon glyphicon-user gi-5x"></i>
                        <h4 className="caption">Quản Trị</h4>
                    </Link>
                </div>
                <div className="col-xs-6 col-md-2">
                    <Link to={"/book/index"} className="thumbnail text-center">
                        <br />
                        <i className="glyphicon glyphicon-book gi-5x"></i>
                        <h4 className="caption">Truyện</h4>
                    </Link>
                </div>
                <div className="col-xs-6 col-md-2">
                    <Link to={"/category/index"} className="thumbnail text-center">
                        <br />
                        <i className="glyphicon glyphicon-folder-open gi-5x"></i>
                        <h4 className="caption">Loại Truyện</h4>
                    </Link>
                </div>
                <div className="col-xs-6 col-md-2">
                    <Link to={"/tag/index"} className="thumbnail text-center">
                        <br />
                        <i className="glyphicon glyphicon-tag gi-5x"></i>
                        <h4 className="caption">Từ Khóa</h4>
                    </Link>
                </div>
                <div className="col-xs-6 col-md-2">
                    <Link to={"/author/index"} className="thumbnail text-center">
                        <br />
                        <i className="glyphicon glyphicon-grain gi-5x"></i>
                        <h4 className="caption">Tác Giả</h4>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;