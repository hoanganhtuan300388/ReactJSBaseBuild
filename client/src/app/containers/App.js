import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 

import requireAuth from "./Auth";
import Default from "../components/layouts/Default";
import Login from "../components/layouts/Login";
import ManagerLogin from "./managers/ManagerLogin";
import Home from "./homes/Home";
import ManagerList from "./managers/ManagerList";
import ManagerAdd from "./managers/ManagerAdd";
import ManagerEdit from "./managers/ManagerEdit";
import CategoryList from "./categories/CategoryList";
import CategoryAddEdit from "./categories/CategoryAddEdit";
import AuthorList from "./authors/AuthorList";
import AuthorAddEdit from "./authors/AuthorAddEdit";
import TagList from "./tags/TagList";
import TagAddEdit from "./tags/TagAddEdit";
import BookList from "./books/BookList";
import BookAddEdit from "./books/BookAddEdit";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/auth">
                        <Login>
                            <Switch>
                                <Route path={"/auth/login"} component={ManagerLogin} />
                            </Switch>     
                        </Login>
                    </Route>
                    <Route path="/">
                        <Default>
                            <Switch>
                                <Route exact path={"/"} component={Home} />
                                <Route path={"/manager/index"} component={ManagerList} />
                                <Route path={"/manager/add"} component={ManagerAdd} />
                                <Route path={"/manager/edit/:id"} component={ManagerEdit} />
                                <Route path={"/category/index"} component={CategoryList} />
                                <Route path={"/category/add"} component={CategoryAddEdit} />
                                <Route path={"/category/edit/:id"} component={CategoryAddEdit} />
                                <Route path={"/author/index"} component={AuthorList} />
                                <Route path={"/author/add"} component={AuthorAddEdit} />
                                <Route path={"/author/edit/:id"} component={AuthorAddEdit} />
                                <Route path={"/tag/index"} component={TagList} />
                                <Route path={"/tag/add"} component={TagAddEdit} />
                                <Route path={"/tag/edit/:id"} component={TagAddEdit} />
                                <Route path={"/book/index"} component={BookList} />
                                <Route path={"/book/add"} component={BookAddEdit} />
                                <Route path={"/book/edit/:id"} component={BookAddEdit} />
                            </Switch>
                        </Default>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;