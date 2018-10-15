import * as React from "react";
import {Router} from "react-router-dom";
import {Route} from "react-router";
import Home from "src/components/pages/Home";
import Login from "src/components/pages/Login";
import history from "src/utils/history"

class App extends React.PureComponent {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}

export default App;
