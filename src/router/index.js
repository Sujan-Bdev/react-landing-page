import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import * as path from "./path";

const Home = lazy(() => import("views/Home"));
const About = lazy(() => import("views/About"));
const Contact = lazy(() => import("views/Contact"));
const Error = lazy(()=> import("views/Error"))


const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={path.HOME} component={Home} />
        <Route exact path={path.ABOUTUS} component={About} />
        <Route exact path={path.CONTACT} component={Contact} />
        <Route component = {Error}/>

      </Switch>
    </>
  );
};

export default Router;
