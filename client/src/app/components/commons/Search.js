import React, { Component } from "react";

class Search extends Component {

    onSearchKeywordChange(event) {
        this.setState({
            search_keyword: event.target.value
        });
    }

    render() {
        const { limit } = this.props;

        const limits = [5, 10, 20, 30, 50];

        return (
            <div className="row search">
                <div className="col-sm-6">
                    <label className="form-inline">
                        Hiển thị &nbsp;
                        <select defaultValue={limit} className="form-control" onChange={(event) => this.props.changeLimit(event.target.value)}>
                            {
                                limits.map((value, index) => {
                                    return (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        &nbsp; bản ghi
                    </label>
                </div>
                <div className="col-sm-6 text-right">
                    <label className="form-inline">
                        <input type="text" className="form-control" placeholder="Từ khóa..." onChange={(event) => this.onSearchKeywordChange(event)} />
                        &nbsp;
                        <button className="btn btn-default" type="button" onClick={() => this.props.search({
                            search_keyword: this.state.search_keyword
                        })}>
                            Tìm Kiếm
                        </button>
                    </label>
                </div>
            </div>
        )
    }
}

export default Search;