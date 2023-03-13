import { ActionableButton } from "./shared/ActionableButton";
import Header from "./components/Header";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
import SideBar from "./components/SideBar";
import { sidebarOptions } from "./static data/data.sidebar";
import MainSection from "./components/MainSection";
import Form from "./components/Form";
import Table from "./components/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => (
  <>
    <GlobalStyleProvider />
    <Header />

    <MainSection>
      <Router>
        <SideBar options={sidebarOptions} />
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
        </Switch>
      </Router>
    </MainSection>
  </>
);

export default App;
