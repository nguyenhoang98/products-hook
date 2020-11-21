import React, { Suspense } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import configureStore from "./Redux/configStore";
import Menu from "./Components/Menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routers from "./routers";
import HeaderContainers from "./Redux/Containers/HeaderContainers";
const store = configureStore();
function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <HeaderContainers />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            {routers.map((value, index) => {
              return (
                <Route
                  path={value.path}
                  component={value.component}
                  exact={value.exact}
                  key={index}
                />
              );
            })}
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}
export default App;
