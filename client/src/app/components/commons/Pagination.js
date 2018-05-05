import React, { Component } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
    render() {
        const { count, current, limit, page, pageCount } = this.props.paging;

        let maxDisplay = 7;

        let pages = [];

        let loopPages = (from, to) => {
            for (let i = from; i <= to; i++) {
                pages.push(
                    <li key={i} className={page == i ? "active" : ""}>
                        {page != i ? <a href="javascript:void(0)" onClick={() => this.props.changePage(i)}>{i}</a> : <span>{i}</span>}
                    </li>
                );
            }
        };

        if (pageCount <= maxDisplay) {
            loopPages(1, pageCount);
        } else {
            let ceil = Math.ceil(maxDisplay / 2);
            let floo = Math.floor(maxDisplay / 2);

            if (page > ceil) {
                pages.push(<li key={0}><a href="javascript:void(0)">...</a></li>);

                if (page >= (pageCount - floo)) {
                    let from = pageCount - maxDisplay + 1;
                    let to = pageCount;

                    loopPages(from, to);
                } else {
                    let from = page - floo;
                    let to = page + floo;

                    loopPages(from, to);

                    pages.push(<li key={pageCount + 1}><a href="javascript:void(0)">...</a></li>);
                }
            } else {
                loopPages(1, maxDisplay);

                pages.push(<li key={pageCount + 1}><a href="javascript:void(0)">...</a></li>);
            }
        }

        return (
            <div className="row">
                <div className="col col-md-8">
                    <nav>
                        <ul className="pagination">
                            <li>
                                {page > 1 ? <a href="javascript:void(0)" onClick={() => this.props.changePage(1)}><span>«</span></a> : <span>«</span>}
                            </li>
                            <li>
                                {page > 1 ? <a href="javascript:void(0)" onClick={() => this.props.changePage(page - 1)}><span>←</span></a> : <span>←</span>}
                            </li>
                            {pages}
                            <li>
                                {page < pageCount ? <a href="javascript:void(0)" onClick={() => this.props.changePage(page + 1)}><span>→</span></a> : <span>→</span>}
                            </li>
                            <li>
                                {page < pageCount ? <a href="javascript:void(0)" onClick={() => this.props.changePage(pageCount)}><span>»</span></a> : <span>»</span>}
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col col-md-4 text-right">Trang {page} trên {pageCount} | tổng số {count} bản ghi</div>
            </div>
        );
    }
}

Pagination.propTypes = {
    paging: PropTypes.object.isRequired,
    changePage: PropTypes.func.isRequired
};

export default Pagination;