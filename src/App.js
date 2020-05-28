import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Test from "./components/test";
import store from "../src/redux/store/store";
import { PrivateRoute } from "./components/__shared/private-route";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/test" component={Test} />
      </Router>
    </Provider>
  );
}

export default App;
