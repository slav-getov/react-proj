import { ActionableButton } from "./shared/ActionableButton";
import Header from "./components/Header";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
import SideBar from "./components/SideBar";
import { sidebarOptions } from "./static data/data.sidebar";
import MainSection from "./components/MainSection";
const App = () => (
  <>
    <GlobalStyleProvider />
    <Header />
    <MainSection>
      <SideBar options={sidebarOptions} />
    </MainSection>
  </>
);

export default App;
