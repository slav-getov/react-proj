import Header from "./components/Sections/Header";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
import SideBar from "./components/Sections/SideBar";
import { sidebarOptions } from "./static data/data.sidebar";
import InformationSection from "./components/Sections/InformationSection";
import MainSection from "./components/Sections/MainSection";
import Form from "./components/forms/Form";
import Table from "./components/Tables/Table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => (
  <>
    <GlobalStyleProvider />
    <Header />
    <MainSection>
      <Router>
        <SideBar options={sidebarOptions} />
        <InformationSection>
          {/* <Router>
        <SideBar options={sidebarOptions} /> */}
          <Switch>
            <Route path="/quote">
              <Form />
            </Route>
            <Route path="/table">
              <Table />
            </Route>
          </Switch>
        </InformationSection>
      </Router>
    </MainSection>
  </>
);

export default App;
